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
        scoresTableBody.innerHTML = '<tr><td colspan="5">No scores recorded yet.</td></tr>';
        return;
    }

    // Sort scores
    scores.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));


    scores.forEach(score => {
        const row = document.createElement('tr');

        // Username cell
        const userCell = document.createElement('td');
        userCell.textContent = score.username;
        row.appendChild(userCell);

        // Quiz title cell
        const quizCell = document.createElement('td');
        quizCell.textContent = score.quizTitle;
        row.appendChild(quizCell);

        // Score cell
        const scoreCell = document.createElement('td');
        scoreCell.textContent = `${score.score} / ${score.totalQuestions}`;
        row.appendChild(scoreCell);
        
        // Time taken cell
        const timeCell = document.createElement('td');
        if (score.duration !== undefined) {
            const minutes = Math.floor(score.duration / 60);
            const seconds = score.duration % 60;
            timeCell.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        } else {
            timeCell.textContent = 'N/A';
        }
        row.appendChild(timeCell);
        
        // Submission time cell
        const dateCell = document.createElement('td');
        if (score.timestamp) {
            const date = new Date(score.timestamp);
            dateCell.textContent = date.toLocaleString();
        } else {
            dateCell.textContent = 'N/A';
        }
        row.appendChild(dateCell);

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