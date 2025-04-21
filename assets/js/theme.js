// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {

    const themeToggle = document.createElement('div');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    document.body.appendChild(themeToggle);

    const savedTheme = localStorage.getItem('quiz_theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = 'light';
        let newIcon = '<i class="fas fa-moon"></i>';
        
        if (currentTheme !== 'dark') {
            newTheme = 'dark';
            newIcon = '<i class="fas fa-sun"></i>';
        }
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('quiz_theme', newTheme);
        themeToggle.innerHTML = newIcon;
    });
});