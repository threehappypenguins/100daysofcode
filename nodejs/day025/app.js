const express = require('express');
const routes = require('./express-router'); // Import the router module

const app = express();
const PORT = process.env.PORT || 3000;

// Use the routes defined in the router module

app.use('/', routes);

// Start over
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});