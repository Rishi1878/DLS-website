document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple check for demo purposes
    if (username === 'ch21btech11030' && password === 'Rishi@2326') {
        document.getElementById('dialogBox').style.display = 'block';
        document.getElementById('redirectButton').addEventListener('click', function() {
            window.location.href = 'https://github.com/Rishi1878/DLS';
        });
    } 
    else if(username === 'ch21btech11009' && password === 'pass')
    {
        document.getElementById('dialogBox').style.display = 'block';
        document.getElementById('redirectButton').addEventListener('click', function() {
            window.location.href = 'https://github.com/Rishi1878/DLS'; // Replace with the desired URL
        });    
    }
    else {
        alert('Invalid credentials, please try again.');
    }
});
