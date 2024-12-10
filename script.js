// Function to register a new user
function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (username && password) {
        // Check if user already exists
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.find(user => user.username === username);

        if (userExists) {
            alert('User  already exists!');
        } else {
            // Add new user to local storage
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful!');
        }
    } else {
        alert('Please fill in all fields.');
    }
}

// Function to login a user
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username && password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            alert('Login successful!');
            // Redirect to secured page
            window.location.href = 'secured.html';
        } else {
            alert('Invalid username or password.');
        }
    } else {
        alert('Please fill in all fields.');
    }
}