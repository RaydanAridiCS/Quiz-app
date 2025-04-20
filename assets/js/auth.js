// DOM Elements
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginTab = document.querySelector('.tab-link[onclick*="login"]');
const registerTab = document.querySelector('.tab-link[onclick*="register"]');
const loginError = document.getElementById('login-error');
const registerError = document.getElementById('register-error');
const registerSuccess = document.getElementById('register-success');

// Admin Credentials
const ADMIN_USER = 'admin@quiz.com';
const ADMIN_PASS = 'admin123';

// Tab Switching 
function showForm(formId) {
    loginError.textContent = '';
    registerError.textContent = '';
    registerSuccess.textContent = '';

    if (formId === 'login') {
        loginForm.classList.add('active-form');
        registerForm.classList.remove('active-form');
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
    } else {
        loginForm.classList.remove('active-form');
        registerForm.classList.add('active-form');
        loginTab.classList.remove('active');
        registerTab.classList.add('active');
    }
}

// LocalStorage Helper 
function getUsers() {
    const users = localStorage.getItem('quiz_users');
    return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
    localStorage.setItem('quiz_users', JSON.stringify(users));
}

// Registration 
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    registerError.textContent = '';
    registerSuccess.textContent = '';

    const username = document.getElementById('register-username').value.trim();
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (!username || !password || !confirmPassword) {
        registerError.textContent = 'All fields are required.';
        return;
    }

    if (password !== confirmPassword) {
        registerError.textContent = 'Passwords do not match.';
        return;
    }

    const users = getUsers();
    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        registerError.textContent = 'Username already exists.';
        return;
    }

    // Add new user
    users.push({ username, password });
    saveUsers(users);

    registerSuccess.textContent = 'Registration successful! You can now log in.';
    registerForm.reset();
});

// Login 
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginError.textContent = '';

    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;

    if (!username || !password) {
        loginError.textContent = 'Both username and password are required.';
        return;
    }

    // Check for Admin
    if (username === ADMIN_USER && password === ADMIN_PASS) {
        console.log('Admin login successful');
        sessionStorage.setItem('quiz_loggedInUser', JSON.stringify({ username: ADMIN_USER, isAdmin: true }));
        window.location.href = 'dashboard.html'; 
        return;
    }

    // Check regular users
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password); 

    if (user) {
        console.log('User login successful');
        sessionStorage.setItem('quiz_loggedInUser', JSON.stringify({ username: user.username, isAdmin: false }));
        window.location.href = 'home.html'; 
    } else {
        loginError.textContent = 'Invalid username or password.';
    }
});