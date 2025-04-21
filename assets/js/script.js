// Sample Quiz Data 
const sampleQuizzes = [
    {
        id: 'jsbasics',
        title: 'JavaScript',
        questions: [
            // Easy questions
            {
                text: 'What keyword declares a variable?',
                options: ['var', 'let', 'const', 'all of the above'],
                correctAnswer: 'all of the above',
                difficulty: 'easy'
            },
            {
                text: 'Which symbol is used for single-line comments?',
                options: ['//', '/*', '#', '<!--'],
                correctAnswer: '//',
                difficulty: 'easy'
            },
            {
                text: 'What does DOM stand for?',
                options: ['Document Object Model', 'Data Object Model', 'Document Order Model', 'Digital Object Manager'],
                correctAnswer: 'Document Object Model',
                difficulty: 'easy'
            },
            // Medium questions
            {
                text: 'Which method adds an element to the end of an array?',
                options: ['push()', 'pop()', 'unshift()', 'shift()'],
                correctAnswer: 'push()',
                difficulty: 'medium'
            },
            {
                text: 'What will "2" + 2 evaluate to in JavaScript?',
                options: ['4', '22', 'NaN', 'TypeError'],
                correctAnswer: '22',
                difficulty: 'medium'
            },
            {
                text: 'Which of the following is not a JavaScript data type?',
                options: ['String', 'Boolean', 'Float', 'Object'],
                correctAnswer: 'Float',
                difficulty: 'medium'
            },
            // Hard questions
            {
                text: 'What is the output of: console.log(typeof typeof 1)?',
                options: ['number', 'string', 'undefined', 'NaN'],
                correctAnswer: 'string',
                difficulty: 'hard'
            },
            {
                text: 'Which method is used to serialize an object into a JSON string?',
                options: ['JSON.parse()', 'JSON.stringify()', 'JSON.toText()', 'JSON.serialize()'],
                correctAnswer: 'JSON.stringify()',
                difficulty: 'hard'
            },
            {
                text: 'What is the result of 3 + 2 + "7" in JavaScript?',
                options: ['12', '57', '327', 'Error'],
                correctAnswer: '57',
                difficulty: 'hard'
            }
        ]
    },
    {
        id: 'htmlbasics',
        title: 'HTML',
        questions: [
            // Easy questions
            {
                text: 'What does HTML stand for?',
                options: ['HyperText Markup Language', 'HighText Machine Language', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language'],
                correctAnswer: 'HyperText Markup Language',
                difficulty: 'easy'
            },
            {
                text: 'Which tag is used for the largest heading?',
                options: ['<h6>', '<heading>', '<h1>', '<head>'],
                correctAnswer: '<h1>',
                difficulty: 'easy'
            },
            {
                text: 'What tag is used to define an unordered list?',
                options: ['<ol>', '<li>', '<ul>', '<list>'],
                correctAnswer: '<ul>',
                difficulty: 'easy'
            },
            // Medium questions
            {
                text: 'Which attribute is used to specify a unique identifier for an HTML element?',
                options: ['class', 'id', 'name', 'src'],
                correctAnswer: 'id',
                difficulty: 'medium'
            },
            {
                text: 'Which HTML element is used to create a form?',
                options: ['<input>', '<form>', '<section>', '<fieldset>'],
                correctAnswer: '<form>',
                difficulty: 'medium'
            },
            {
                text: 'Which HTML tag is used to define an internal style sheet?',
                options: ['<css>', '<script>', '<style>', '<link>'],
                correctAnswer: '<style>',
                difficulty: 'medium'
            },
            // Hard questions
            {
                text: 'Which HTML attribute is used to define inline styles?',
                options: ['class', 'styles', 'style', 'font'],
                correctAnswer: 'style',
                difficulty: 'hard'
            },
            {
                text: 'What is the correct HTML element for inserting a line break?',
                options: ['<lb>', '<break>', '<br>', '<newline>'],
                correctAnswer: '<br>',
                difficulty: 'hard'
            },
            {
                text: 'Which HTML element defines navigation links?',
                options: ['<navigation>', '<nav>', '<menu>', '<navigate>'],
                correctAnswer: '<nav>',
                difficulty: 'hard'
            }
        ]
    },
    {
        id: 'cssbasics',
        title: 'CSS',
        questions: [
            // Easy questions
            {
                text: 'What does CSS stand for?',
                options: ['Cascading Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'],
                correctAnswer: 'Cascading Style Sheets',
                difficulty: 'easy'
            },
            {
                text: 'Which property is used to change the background color?',
                options: ['color', 'bgcolor', 'background-color', 'background'],
                correctAnswer: 'background-color',
                difficulty: 'easy'
            },
            {
                text: 'Which CSS property controls the text size?',
                options: ['text-size', 'font-size', 'text-style', 'font-style'],
                correctAnswer: 'font-size',
                difficulty: 'easy'
            },
            // Medium questions
            {
                text: 'Which CSS selector selects elements with a specific class attribute?',
                options: ['.class', '#class', '*class', '@class'],
                correctAnswer: '.class',
                difficulty: 'medium'
            },
            {
                text: 'Which property is used to create space between elements?',
                options: ['spacing', 'margin', 'padding', 'border'],
                correctAnswer: 'margin',
                difficulty: 'medium'
            },
            {
                text: 'Which CSS property is used to change the text color of an element?',
                options: ['text-color', 'color', 'font-color', 'text-style'],
                correctAnswer: 'color',
                difficulty: 'medium'
            },
            // Hard questions
            {
                text: 'Which CSS property is used to specify the stack order of an element?',
                options: ['z-index', 'position', 'stack', 'overlay'],
                correctAnswer: 'z-index',
                difficulty: 'hard'
            },
            {
                text: 'Which CSS property is used to make a text bold?',
                options: ['font-style', 'text-decoration', 'font-weight', 'text-transform'],
                correctAnswer: 'font-weight',
                difficulty: 'hard'
            },
            {
                text: 'What is the correct CSS syntax for making all the <p> elements bold?',
                options: ['p {text-size: bold;}', 'p {font-weight: bold;}', '<p style="font-size: bold;">', 'p.all {font-weight: bold;}'],
                correctAnswer: 'p {font-weight: bold;}',
                difficulty: 'hard'
            }
        ]
    },
    {
        id: 'pythonbasics',
        title: 'Python',
        questions: [
            // Easy questions
            {
                text: 'What symbol is used for comments in Python?',
                options: ['//', '/*', '#', '<!--'],
                correctAnswer: '#',
                difficulty: 'easy'
            },
            {
                text: 'Which of these is NOT a Python data type?',
                options: ['int', 'float', 'char', 'bool'],
                correctAnswer: 'char',
                difficulty: 'easy'
            },
            {
                text: 'How do you create a list in Python?',
                options: ['(1, 2, 3)', '[1, 2, 3]', '{1, 2, 3}', '<1, 2, 3>'],
                correctAnswer: '[1, 2, 3]',
                difficulty: 'easy'
            },
            // Medium questions
            {
                text: 'Which method is used to add an item to a list?',
                options: ['add()', 'append()', 'insert()', 'extend()'],
                correctAnswer: 'append()',
                difficulty: 'medium'
            },
            {
                text: 'What is the correct way to create a function in Python?',
                options: ['function myFunc():', 'def myFunc():', 'create myFunc():', 'func myFunc():'],
                correctAnswer: 'def myFunc():',
                difficulty: 'medium'
            },
            {
                text: 'Which operator is used for exponentiation in Python?',
                options: ['^', '**', '^^', '//'],
                correctAnswer: '**',
                difficulty: 'medium'
            },
            // Hard questions
            {
                text: 'What is the output of: print(list(filter(lambda x: x < 5, range(10))))?',
                options: ['[0, 1, 2, 3, 4]', '[1, 2, 3, 4, 5]', '[0, 1, 2, 3, 4, 5]', 'Error'],
                correctAnswer: '[0, 1, 2, 3, 4]',
                difficulty: 'hard'
            },
            {
                text: 'Which of the following is not a valid way to create a set in Python?',
                options: ['set([1, 2, 3])', '{1, 2, 3}', 'set(1, 2, 3)', 'frozenset([1, 2, 3])'],
                correctAnswer: 'set(1, 2, 3)',
                difficulty: 'hard'
            },
            {
                text: 'What does the "yield" keyword do in Python?',
                options: ['Terminates a function', 'Creates a generator function', 'Returns multiple values', 'Pauses execution indefinitely'],
                correctAnswer: 'Creates a generator function',
                difficulty: 'hard'
            }
        ]
    }
];

// Function to initialize sample data
// Make sure all quizzes have difficulty levels
function ensureQuizzesDifficulty() {
    const quizzes = JSON.parse(localStorage.getItem('quiz_quizzes')) || [];
    let updated = false;
    
    quizzes.forEach(quiz => {
        quiz.questions.forEach(question => {
            if (!question.difficulty) {
                // Assign a default difficulty if not present
                question.difficulty = 'medium';
                updated = true;
            }
        });
    });
    
    if (updated) {
        localStorage.setItem('quiz_quizzes', JSON.stringify(quizzes));
        console.log('Updated quiz questions with missing difficulty levels');
    }
}

// Call this function before loading quizzes
function initializeSampleData() {
    localStorage.setItem('quiz_quizzes', JSON.stringify(sampleQuizzes));
    console.log('Sample quiz data updated in localStorage.');
    
    if (!localStorage.getItem('quiz_scores')) {
        localStorage.setItem('quiz_scores', JSON.stringify([]));
    }
    
    // Ensure all quizzes have difficulty levels
    ensureQuizzesDifficulty();
}


// Function to load and display quizzes 
function loadQuizzes() {
    const quizListElement = document.getElementById('quiz-list');
    const difficultySelector = document.getElementById('difficulty-selector');
    const quizzes = JSON.parse(localStorage.getItem('quiz_quizzes')) || [];

    quizListElement.innerHTML = ''; 

    if (quizzes.length === 0) {
        quizListElement.innerHTML = '<li>No quizzes available.</li>';
        return;
    }

    const selectedDifficulty = difficultySelector ? difficultySelector.value : 'all';
    
    // Save the selected difficulty to localStorage for persistence
    localStorage.setItem('quiz_preferred_difficulty', selectedDifficulty);
    
    // Also save to sessionStorage for current session
    sessionStorage.setItem('quiz_selectedDifficulty', selectedDifficulty);

    quizzes.forEach(quiz => {
        const listItem = document.createElement('li');
        listItem.textContent = quiz.title;
        listItem.dataset.quizId = quiz.id;
        listItem.dataset.difficulty = selectedDifficulty;
        listItem.addEventListener('click', () => startQuiz(quiz.id, selectedDifficulty));
        quizListElement.appendChild(listItem);
    });
}

// Function to start a quiz 
function startQuiz(quizId, difficulty) {
    sessionStorage.setItem('quiz_selectedQuizId', quizId);
    sessionStorage.setItem('quiz_selectedDifficulty', difficulty);
    window.location.href = 'quiz.html'; 
}

// Add this to your initialization code
// Check if user is logged in
const loggedInUser = JSON.parse(sessionStorage.getItem('quiz_loggedInUser'));
if (!loggedInUser) {
    window.location.href = '../../index.html'; 
} else {
    document.getElementById('username').textContent = loggedInUser.username.split('@')[0]; 
    initializeSampleData(); 
    
    // Set the difficulty selector to the saved preference
    const difficultySelector = document.getElementById('difficulty-selector');
    if (difficultySelector) {
        const savedDifficulty = localStorage.getItem('quiz_preferred_difficulty');
        if (savedDifficulty) {
            difficultySelector.value = savedDifficulty;
        }
        difficultySelector.addEventListener('change', loadQuizzes);
    }
    
    loadQuizzes(); 
}

// Basic logout functionality
const logoutButton = document.getElementById('logout-button');
if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        sessionStorage.removeItem('quiz_loggedInUser');
        window.location.href = '../../index.html';
    });
}
