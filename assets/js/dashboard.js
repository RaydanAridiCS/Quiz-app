// Basic logout functionality
const logoutButton = document.getElementById('logout-button');
if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        sessionStorage.removeItem('quiz_loggedInUser');
        window.location.href = '../../index.html';
    });
}

// Function to load and display scores
function loadScores() {
    const scoresTableBody = document.querySelector('#scores-table tbody');
    const scores = JSON.parse(localStorage.getItem('quiz_scores')) || [];

    scoresTableBody.innerHTML = '';

    if (scores.length === 0) {
        scoresTableBody.innerHTML = '<tr><td colspan="3">No scores recorded yet.</td></tr>';
        return;
    }

    // Sort scores
    scores.sort((a, b) => {
        if (a.username < b.username) return -1;
        if (a.username > b.username) return 1;
        if (a.quizTitle < b.quizTitle) return -1;
        if (a.quizTitle > b.quizTitle) return 1;
        return 0; 
    });


    scores.forEach(score => {
        const row = document.createElement('tr');

        const userCell = document.createElement('td');
        userCell.textContent = score.username;
        row.appendChild(userCell);

        const quizCell = document.createElement('td');
        quizCell.textContent = score.quizTitle;
        row.appendChild(quizCell);

        const scoreCell = document.createElement('td');
        scoreCell.textContent = `${score.score} / ${score.totalQuestions}`;
        row.appendChild(scoreCell);

        scoresTableBody.appendChild(row);
    });
}


// Admin Check
const loggedInUser = JSON.parse(sessionStorage.getItem('quiz_loggedInUser'));
if (!loggedInUser || !loggedInUser.isAdmin) {
    alert('Access Denied. Admins only.');
    window.location.href = '../../index.html'; 
} else {
    loadScores();
}