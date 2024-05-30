document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple check for demo purposes
    if (username === 'ch21btech11030' && password === 'Rishi@2326') {
        window.location.href = 'http://127.0.0.1:5500/page1.html';
    } 
    else if(username === 'ch21btech11009' && password === 'pass')
    {
        window.location.href = 'http://127.0.0.1:5500/page1.html';
    }
    else {
        alert('Invalid credentials, please try again.');
    }
});