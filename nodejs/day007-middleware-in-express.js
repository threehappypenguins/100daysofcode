const express = require('express');
const app = express();

// Middleware function to parse JSON request bodies
app.use(express.json());

// Middleware function to log information about each request
app.use((req, res, next) => {
    console.log('Request received:', req.method, req.url);
    next(); // Call next middleware function
});

// Route handler for handling POST requests with JSON data

app.post('/data', (req, res) => {
    const jsonData = req.body;
    console.log('Received JSON data:', jsonData);
    res.send('Received JSON data successfully!');
});

app.get('/home', (req, res) => {
    res.send('Welcome to the Home Page!');
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('404 Not Found: Page not found.');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});