// server.js
const express = require('express');
const validateInputs = require('./validate');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle form submission
app.post('/register', validateInputs, (req, res) => {
  // If validation passes, handle registration logic here
  res.send('Registration successful!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
