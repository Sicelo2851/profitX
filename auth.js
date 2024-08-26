document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Store user in localStorage for simplicity (replace with real API calls in production)
    localStorage.setItem('user', JSON.stringify({ username, email, password }));

    alert('Registration successful! Please log in.');
    window.location.href = 'login.html';
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        alert('Login successful!');
        window.location.href = 'welcome.html';
    } else {
        alert('Login failed! Please check your credentials.');
    }
});