function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (!username || !email || !password || !confirmPassword) {
        alert('All fields must be filled out');
        return;
    }

    var usernameRegex = /^[a-zA-Z]+$/;
    if (!username.match(usernameRegex)) {
        alert('Username should only contain alphabets');
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        alert('Invalid email format');
        return;
    }

    var passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    if (!password.match(passwordRegex)) {
        alert('Password must be at least 8 characters, contain one uppercase letter, one digit, and one special character');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    alert('Registration Successful');
}