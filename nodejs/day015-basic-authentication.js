const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Dummy user credentials
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// User Login Endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Find user in the list of users
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }
    // Generate JWT token
    const token = jwt.sign({ username: user.username }, 'secretKey', { expiresIn: '1h' });
    res.json({ token });
});

// Protected Route
app.get('/protected', authenticateToken, (req, res) => {
    res.send('You are authorized to access this route.');
});

// Authentication Middleware
function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }
    jwt.verify(token, 'secretKey', (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Access denied. Invalid token.' });
        }
        req.user = decoded;
        next();
    });
}

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});