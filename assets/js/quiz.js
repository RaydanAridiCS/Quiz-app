// DOM Elements
const quizTitleElement = document.getElementById('quiz-title');
const quizFormElement = document.getElementById('quiz-form');
const submitButton = document.getElementById('submit-quiz');
const resultsElement = document.getElementById('quiz-results');
const backHomeButton = document.getElementById('back-home');

// Global variable to hold current quiz data
let currentQuiz = null;
let loggedInUser = null;


// Basic logout/navigation
 if (backHomeButton) {
     backHomeButton.addEventListener('click', () => {
         window.location.href = 'home.html';
     });
 }

// Check if user is logged in
loggedInUser = JSON.parse(sessionStorage.getItem('quiz_loggedInUser'));
if (!loggedInUser) {
    window.location.href = 'index.html'; 
}

// Load Quiz Data
function loadQuiz() {
    const quizId = sessionStorage.getItem('quiz_selectedQuizId');
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

    displayQuiz();
}

// Display Quiz Questions
function displayQuiz() {
    quizTitleElement.textContent = currentQuiz.title;
    quizFormElement.innerHTML = ''; // Clear previous content

    currentQuiz.questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-block');

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
}

// Handle Quiz Submission
submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (!quizFormElement.checkValidity()) {
         quizFormElement.reportValidity();
         return;
    }


    let score = 0;
    currentQuiz.questions.forEach((question, index) => {
        const selectedOption = quizFormElement.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption && selectedOption.value === question.correctAnswer) {
            score++;
        }
    });

    const totalQuestions = currentQuiz.questions.length;
    const percentage = ((score / totalQuestions) * 100).toFixed(1);

    // Display results
    resultsElement.innerHTML = `<h2>Results</h2><p>You scored ${score} out of ${totalQuestions} (${percentage}%)</p>`;
    resultsElement.style.display = 'block';
    submitButton.style.display = 'none'; 
    quizFormElement.style.display = 'none'; 
    backHomeButton.style.display = 'inline-block'; 

    saveScore(loggedInUser.username, currentQuiz.id, currentQuiz.title, score, totalQuestions);
});


function saveScore(username, quizId, quizTitle, score, totalQuestions) {
    const scores = JSON.parse(localStorage.getItem('quiz_scores')) || [];
    const newScore = {
        username: username,
        quizId: quizId,
        quizTitle: quizTitle,
        score: score,
        totalQuestions: totalQuestions,
        timestamp: new Date().toISOString() 
    };


    scores.push(newScore);
    localStorage.setItem('quiz_scores', JSON.stringify(scores));
    console.log('Score saved:', newScore);
}


loadQuiz();