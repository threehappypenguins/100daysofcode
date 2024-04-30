const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Sample data (in-memory database)
let books = [
    { id: 1, title: 'Book 1', author: 'Author 1'},
    { id: 2, title: 'Book 2', author: 'Author 2'},
    { id: 3, title: 'Book 3', author: 'Author 3'}
];

// GET all books
app.get('/books', (req, res) => {
    res.json(books);
});

// GET a single book by ID
app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
});

// POST a new book
app.post('/books', (req, res) => {
    const { title, author } = req.body;
    const id = books.length + 1;
    const newBook = { id, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT/update a book by ID
app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author } = req.body;
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books[index] = { id, title, author };
        res.json(books[index]);
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
});

// DELETE a book by ID
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
});

// Start the Express server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});