const express = require('express');
const router = express.Router();

// Route: /hello
router.get('/hello', (req, res) => {
    res.send('world!')
});

// Route: /goodbye
router.get('/goodbye', (req, res) => {
    res.send('See you later!')
});

module.exports = router;