const express = require('express');
const app = express();

// Route handler for handling requests with query parameters
app.get('/search', (req, res) => {
    const query = req.query; // Access query parameters from req.query
    const searchTerm = query.q; // Acces specific query parameter (e.g., 'q' for search term)

    // Process the search term (e.g., perform search in a database)
    // For demonstration purposes, simply send back the search term in the response 
    res.send(`You searched for: ${searchTerm}`)
});

// Start th Express server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});