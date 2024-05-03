const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(cookieParser());
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: false
}));
app.use(express.json());

// Authentication route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Dummy user credentials
    const users = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' }
    ];
    // Check if the username and password match
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }
    // Store user data in session
    req.session.user = user;
    res.json({ message: 'Login successful', user });
});

// Protected route
app.get('/protected', (req, res) => {
    // Check if user is authenticated
    if (req.session.user) {
        res.send(`Welcome ${req.session.user.username}!`);
    } else {
        res.status(401).send('Unauthorized!');
    }
});

// Logout route
app.post('/logout', (req, res) => {
    // Destroy session data
    req.session.destroy();
    res.send('Logged out successfully!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});