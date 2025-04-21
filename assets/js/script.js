// Sample Quiz Data 
const sampleQuizzes = [
    {
        id: 'jsbasics',
        title: 'JavaScript Basics',
        questions: [
            {
                text: 'What keyword declares a variable?',
                options: ['var', 'let', 'const', 'all of the above'],
                correctAnswer: 'all of the above'
            },
            {
                text: 'Which symbol is used for single-line comments?',
                options: ['//', '/*', '#', '<!--'],
                correctAnswer: '//'
            },
            {
                text: 'What does DOM stand for?',
                options: ['Document Object Model', 'Data Object Model', 'Document Order Model', 'Digital Object Manager'],
                correctAnswer: 'Document Object Model'
            },
            {
                text: 'Which method adds an element to the end of an array?',
                options: ['push()', 'pop()', 'unshift()', 'shift()'],
                correctAnswer: 'push()'
            },
            {
                text: 'What will "2" + 2 evaluate to in JavaScript?',
                options: ['4', '22', 'NaN', 'TypeError'],
                correctAnswer: '22'
            }
        ]
    }
];

// Function to initialize sample data
function initializeSampleData() {
    localStorage.setItem('quiz_quizzes', JSON.stringify(sampleQuizzes));
    console.log('Sample quiz data updated in localStorage.');
    
    if (!localStorage.getItem('quiz_scores')) {
        localStorage.setItem('quiz_scores', JSON.stringify([]));
    }
}

// Function to load and display quizzes 
function loadQuizzes() {
    const quizListElement = document.getElementById('quiz-list');
    const quizzes = JSON.parse(localStorage.getItem('quiz_quizzes')) || [];

    quizListElement.innerHTML = ''; 

    if (quizzes.length === 0) {
        quizListElement.innerHTML = '<li>No quizzes available.</li>';
        return;
    }

    quizzes.forEach(quiz => {
        const listItem = document.createElement('li');
        listItem.textContent = quiz.title;
        listItem.dataset.quizId = quiz.id;
        listItem.addEventListener('click', () => startQuiz(quiz.id));
        quizListElement.appendChild(listItem);
    });
}

// Function to start a quiz 
function startQuiz(quizId) {
    sessionStorage.setItem('quiz_selectedQuizId', quizId);
    window.location.href = 'quiz.html'; 
}


// Basic logout functionality
const logoutButton = document.getElementById('logout-button');
if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        sessionStorage.removeItem('quiz_loggedInUser');
        window.location.href = 'index.html';
    });
}

// Check if user is logged in
const loggedInUser = JSON.parse(sessionStorage.getItem('quiz_loggedInUser'));
if (!loggedInUser) {
    window.location.href = 'index.html'; 
} else {
    document.getElementById('username').textContent = loggedInUser.username.split('@')[0]; 
    initializeSampleData(); 
    loadQuizzes(); 
}
