const express = require('express');
const app = express();

// Serve static files from the public directory
app.use(express.static('day009-public'));

// Start the express server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});