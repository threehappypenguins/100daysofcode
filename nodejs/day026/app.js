// Import and load environment variables from the .env file
require('dotenv').config();

const express = require('express');
const authorize = require('./jwt-auth-mw');

const app = express();

// Route that requires authorization
app.get('/protected', authorize, (req, res) => {
    res.send('Protected route. User ID: ' + req.user.userId);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});