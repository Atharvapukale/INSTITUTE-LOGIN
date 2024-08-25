document.getElementById('enrollmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('You have successfully enrolled in the course!');
    // Code to handle course enrollment submission, e.g., sending data to a server
});

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Code to handle login
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === 'admin' && password === 'password') {
        alert('Login successful!');
        window.location.href = 'admin.html';
    } else {
        alert('Invalid username or password.');
    }
});
