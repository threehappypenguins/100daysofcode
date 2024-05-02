const express = require('express');

const app = express ();

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