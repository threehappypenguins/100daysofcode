const express = require('express');
const rateLimiter = require('./rateLimiter');

const app = express();
const PORT = process.env.PORT || 3000;

// Apply the rate limiting middleware to all requests
app.use(rateLimiter);

app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

app.get('/api', (req, res) => {
    res.send('Welcome to the API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});