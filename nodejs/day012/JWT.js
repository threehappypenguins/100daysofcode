const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if username and password match
    if (username === 'user1' && password === process.env.SECRET_KEY) {
        // Valid credentials, generate JWT token
        const user = { id: 1, username: 'user1' };
        const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } else {
        // Invalid credentials
        res.status(401).json({ error: 'Invalid username or password.' });
    }
});

// Protected route
app.get('/protected', verifyToken, (req, res) => {
    res.send('You are authorized to access this route.');
});

// Middleware to verify JWT token
function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send('Access denied. No token provided.');
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send('Access denied. Invalid token.');
        }
        req.user = decoded;
        next();
    });
}

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
