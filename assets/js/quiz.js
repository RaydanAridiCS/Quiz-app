// DOM Elements 
const quizTitleElement = document.getElementById('quiz-title');
const quizFormElement = document.getElementById('quiz-form');
const submitButton = document.getElementById('submit-quiz');
const resultsElement = document.getElementById('quiz-results');
const backHomeButton = document.getElementById('back-home');
const difficultyDisplay = document.createElement('div');
difficultyDisplay.id = 'difficulty-display';
difficultyDisplay.classList.add('difficulty-display');

// Add timer element
const timerElement = document.createElement('div');
timerElement.id = 'quiz-timer';
timerElement.classList.add('quiz-timer');
document.querySelector('.quiz-container').insertBefore(timerElement, quizTitleElement);
document.querySelector('.quiz-container').insertBefore(difficultyDisplay, timerElement);

// Global variables 
let currentQuiz = null;
let loggedInUser = null;
let timerInterval = null;
let timeLeft = 90; 
let quizStartTime = null; 
let selectedDifficulty = 'all';

// Timer Functions 
function startTimer() {
    quizStartTime = new Date(); 
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz(true); 
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `Time Remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    if (timeLeft <= 30) {
        timerElement.classList.add('timer-warning');
    }
    if (timeLeft <= 10) {
        timerElement.classList.add('timer-danger');
    }
}

// Load Quiz Data 
function loadQuiz() {
    const quizId = sessionStorage.getItem('quiz_selectedQuizId');
    
    selectedDifficulty = localStorage.getItem('quiz_preferred_difficulty') || 
                        sessionStorage.getItem('quiz_selectedDifficulty') || 
                        'all';
    
    if (!quizId) {
        alert('No quiz selected!');
        window.location.href = 'home.html';
        return;
    }

    const allQuizzes = JSON.parse(localStorage.getItem('quiz_quizzes')) || [];
    currentQuiz = allQuizzes.find(q => q.id === quizId);

    if (!currentQuiz) {
        alert('Selected quiz not found!');
        window.location.href = 'home.html';
        return;
    }

    // Set timer based on difficulty
    if (selectedDifficulty === 'easy') {
        timeLeft = 120; 
    } else if (selectedDifficulty === 'medium') {
        timeLeft = 90;  
    } else if (selectedDifficulty === 'hard') {
        timeLeft = 60;  
    } else if (selectedDifficulty === 'all') {
        timeLeft = 180;
    }

    // Display difficulty
    updateDifficultyDisplay();
    
    displayQuiz();
    startTimer();
}

function updateDifficultyDisplay() {
    let difficultyText = 'All Levels';
    let difficultyClass = 'all-difficulty';
    
    if (selectedDifficulty === 'easy') {
        difficultyText = 'Easy';
        difficultyClass = 'easy-difficulty';
    } else if (selectedDifficulty === 'medium') {
        difficultyText = 'Medium';
        difficultyClass = 'medium-difficulty';
    } else if (selectedDifficulty === 'hard') {
        difficultyText = 'Hard';
        difficultyClass = 'hard-difficulty';
    }
    
    difficultyDisplay.textContent = `Difficulty: ${difficultyText}`;
    difficultyDisplay.className = 'difficulty-display ' + difficultyClass;
}

// Display Quiz Questions 
function displayQuiz() {
    quizTitleElement.textContent = currentQuiz.title;
    
    quizFormElement.innerHTML = ''; 

    // Filter questions by difficulty if not 'all'
    let questionsToDisplay = currentQuiz.questions;
    if (selectedDifficulty !== 'all') {
        questionsToDisplay = currentQuiz.questions.filter(q => q.difficulty === selectedDifficulty);
        
        if (questionsToDisplay.length === 0) {
            questionsToDisplay = currentQuiz.questions;
            console.warn(`No questions found for difficulty: ${selectedDifficulty}. Showing all questions.`);
        }
    }

    questionsToDisplay.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-block');
        questionDiv.dataset.difficulty = question.difficulty || 'medium'; 

        const questionText = document.createElement('p');
        questionText.classList.add('question-text');
        questionText.textContent = `${index + 1}. ${question.text}`;
        questionDiv.appendChild(questionText);

        const optionsDiv = document.createElement('div');
        optionsDiv.classList.add('options-block');

        question.options.forEach((option, optionIndex) => {
            const label = document.createElement('label');
            label.classList.add('option-label');

            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = `question-${index}`;
            radioInput.value = option;
            radioInput.required = true;

            label.appendChild(radioInput);
            label.appendChild(document.createTextNode(` ${option}`));
            optionsDiv.appendChild(label);
        });

        questionDiv.appendChild(optionsDiv);
        quizFormElement.appendChild(questionDiv);
    });
    
    // Make sure the form and submit button are visible
    quizFormElement.style.display = 'block';
    submitButton.style.display = 'block';
    resultsElement.style.display = 'none';
    backHomeButton.style.display = 'none';
}

// Handle Quiz Submission 
function endQuiz(isTimeout) {
    clearInterval(timerInterval);
    
    let score = 0;
    let answeredCount = 0;
    
    // Filter questions by difficulty if not 'all'
    let questionsToCheck = currentQuiz.questions;
    if (selectedDifficulty !== 'all') {
        questionsToCheck = currentQuiz.questions.filter(q => q.difficulty === selectedDifficulty);
        
        // If no questions match the difficulty (for backward compatibility)
        if (questionsToCheck.length === 0) {
            questionsToCheck = currentQuiz.questions;
        }
    }
    
    questionsToCheck.forEach((question, index) => {
        const selectedOption = quizFormElement.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption) {
            answeredCount++;
            if (selectedOption.value === question.correctAnswer) {
                score++;
            }
        }
    });
    
    const totalQuestions = questionsToCheck.length;
    const percentage = ((score / totalQuestions) * 100).toFixed(1);
    
    // Display results with timeout message if applicable
    let resultMessage = `<h2>Results</h2>`;
    if (isTimeout) {
        resultMessage += `<p class="timeout-message">Time's up! You answered ${answeredCount} out of ${totalQuestions} questions.</p>`;
    }
    resultMessage += `<p>You scored ${score} out of ${totalQuestions} (${percentage}%)</p>`;
    resultMessage += `<p>Difficulty: ${selectedDifficulty === 'all' ? 'All Levels' : selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)}</p>`;
    
    resultsElement.innerHTML = resultMessage;
    resultsElement.style.display = 'block';
    submitButton.style.display = 'none';
    quizFormElement.style.display = 'none';
    backHomeButton.style.display = 'block';
    
    // Save score to localStorage
    saveScore(loggedInUser.username, currentQuiz.id, currentQuiz.title, score, totalQuestions, selectedDifficulty);
}

//  Handle Quiz Submission 
submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (!quizFormElement.checkValidity()) {
        quizFormElement.reportValidity();
        return;
    }

    endQuiz(false);
});

// Save Score 
function saveScore(username, quizId, quizTitle, score, totalQuestions, difficulty) {
    const scores = JSON.parse(localStorage.getItem('quiz_scores')) || [];
    
    const endTime = new Date();
    const durationSeconds = Math.floor((endTime - quizStartTime) / 1000);
    const remainingTime = timeLeft;
    
    const newScore = {
        username: username,
        quizId: quizId,
        quizTitle: quizTitle,
        score: score,
        totalQuestions: totalQuestions,
        timestamp: endTime.toISOString(),
        duration: durationSeconds,
        remainingTime: remainingTime,
        difficulty: difficulty
    };

    scores.push(newScore);
    localStorage.setItem('quiz_scores', JSON.stringify(scores));
    console.log('Score saved:', newScore);
}

// Basic logout
if (backHomeButton) {
    backHomeButton.addEventListener('click', () => {
        window.location.href = 'home.html';
    });
}

loggedInUser = JSON.parse(sessionStorage.getItem('quiz_loggedInUser'));
if (!loggedInUser) {
    window.location.href = '../../index.html';
} else {
    loadQuiz();
}