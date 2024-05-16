const express = require('express');
const app = express();

const items = require('./data');

// API endpoint for paginated items
app.get('/api/items', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 5;
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const paginatedItems = items.slice(startIndex, endIndex);

    // Simulate a delay to mimic database retrieval
    setTimeout(() => {
        res.json({
            items: paginatedItems,
            currentPage: page,
            pageSize: pageSize,
            totalItems: items.length
        });
    }, 500); // Adjust this delay as needed
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});