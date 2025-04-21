// Function to show the selected form (login or register)
function showForm(formType) {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginTab = document.querySelector('.tab-link:nth-child(1)');
    const registerTab = document.querySelector('.tab-link:nth-child(2)');
    
    if (formType === 'login') {
        loginForm.classList.add('active-form');
        registerForm.classList.remove('active-form');
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
    } else {
        registerForm.classList.add('active-form');
        loginForm.classList.remove('active-form');
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
    }
}

// Function to get users from localStorage
function getUsers() {
    const users = localStorage.getItem('quiz_users');
    return users ? JSON.parse(users) : [];
}

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const errorElement = document.getElementById('login-error');
    
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // Store logged in user in sessionStorage
        sessionStorage.setItem('quiz_loggedInUser', JSON.stringify(user));
        
        // Redirect to home page or admin dashboard
        if (user.isAdmin) {
            window.location.href = 'assets/pages/dashboard.html';
        } else {
            window.location.href = 'assets/pages/home.html';
        }
    } else {
        errorElement.textContent = 'Invalid username or password.';
    }
});

// Handle register form submission
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    const errorElement = document.getElementById('register-error');
    const successElement = document.getElementById('register-success');
    
    // Reset messages
    errorElement.textContent = '';
    successElement.textContent = '';
    
    // Validate password match
    if (password !== confirmPassword) {
        errorElement.textContent = 'Passwords do not match.';
        return;
    }
    
    // Validate password strength (at least 6 characters)
    if (password.length < 6) {
        errorElement.textContent = 'Password must be at least 6 characters long.';
        return;
    }
    
    const users = getUsers();
    
    // Check if username already exists
    if (users.some(u => u.username === username)) {
        errorElement.textContent = 'Username already exists.';
        return;
    }
    
    // Create new user
    const newUser = {
        username: username,
        password: password,
        isAdmin: username.includes('admin') // Simple admin check
    };
    
    // Add user to localStorage
    users.push(newUser);
    localStorage.setItem('quiz_users', JSON.stringify(users));
    
    // Show success message
    successElement.textContent = 'Registration successful! You can now login.';
    
    // Reset form
    document.getElementById('register-form').reset();
    
    // Switch to login form after a delay
    setTimeout(() => {
        showForm('login');
    }, 2000);
});

// Initialize admin user if no users exist
(function initializeUsers() {
    const users = getUsers();
    if (users.length === 0) {
        const adminUser = {
            username: 'admin@quiz.com',
            password: 'admin123',
            isAdmin: true
        };
        localStorage.setItem('quiz_users', JSON.stringify([adminUser]));
        console.log('Admin user created.');
    }
})();