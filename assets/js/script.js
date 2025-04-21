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
    },
    {
        id: 'htmlbasics',
        title: 'HTML Basics',
        questions: [
            {
                text: 'What does HTML stand for?',
                options: ['HyperText Markup Language', 'HighText Machine Language', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language'],
                correctAnswer: 'HyperText Markup Language'
            },
            {
                text: 'Which tag is used for the largest heading?',
                options: ['<h6>', '<heading>', '<h1>', '<head>'],
                correctAnswer: '<h1>'
            },
            {
                text: 'What tag is used to define an unordered list?',
                options: ['<ol>', '<li>', '<ul>', '<list>'],
                correctAnswer: '<ul>'
            },
            {
                text: 'Which attribute is used to specify a unique identifier for an HTML element?',
                options: ['class', 'id', 'name', 'src'],
                correctAnswer: 'id'
            },
            {
                text: 'Which HTML element is used to create a form?',
                options: ['<input>', '<form>', '<section>', '<fieldset>'],
                correctAnswer: '<form>'
            }
        ]
    },
    {
        id: 'cssbasics',
        title: 'CSS Basics',
        questions: [
            {
                text: 'What does CSS stand for?',
                options: ['Cascading Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'],
                correctAnswer: 'Cascading Style Sheets'
            },
            {
                text: 'Which property is used to change the background color?',
                options: ['color', 'bgcolor', 'background-color', 'background'],
                correctAnswer: 'background-color'
            },
            {
                text: 'Which CSS property controls the text size?',
                options: ['text-size', 'font-size', 'text-style', 'font-style'],
                correctAnswer: 'font-size'
            },
            {
                text: 'Which CSS selector selects elements with a specific class attribute?',
                options: ['.class', '#class', '*class', '@class'],
                correctAnswer: '.class'
            },
            {
                text: 'Which property is used to create space between elements?',
                options: ['spacing', 'margin', 'padding', 'border'],
                correctAnswer: 'margin'
            }
        ]
    },
    {
        id: 'pythonbasics',
        title: 'Python Basics',
        questions: [
            {
                text: 'What symbol is used for comments in Python?',
                options: ['//', '/*', '#', '<!--'],
                correctAnswer: '#'
            },
            {
                text: 'Which of these is NOT a Python data type?',
                options: ['int', 'float', 'char', 'bool'],
                correctAnswer: 'char'
            },
            {
                text: 'How do you create a list in Python?',
                options: ['(1, 2, 3)', '[1, 2, 3]', '{1, 2, 3}', '<1, 2, 3>'],
                correctAnswer: '[1, 2, 3]'
            },
            {
                text: 'Which method is used to add an item to a list?',
                options: ['add()', 'append()', 'insert()', 'extend()'],
                correctAnswer: 'append()'
            },
            {
                text: 'What is the correct way to create a function in Python?',
                options: ['function myFunc():', 'def myFunc():', 'create myFunc():', 'func myFunc():'],
                correctAnswer: 'def myFunc():'
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
        window.location.href = '../../index.html';
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
