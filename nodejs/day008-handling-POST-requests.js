const express = require('express');
const app = express();

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Handle POST requests to the /submit endpoint
app.post('/submit', (req, res) => {
    const formData = req.body;
    console.log('Received form data:', formData);
    // Process form data... 
    res.send('Form data received successfully!');
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('404 Not Found: Page not found.');
});

// Start the Express server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});