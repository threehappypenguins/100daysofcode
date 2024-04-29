// Import the fs module
const fs = require('fs');

// Read from a file
fs.readFile('day002-example.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

// Import the http module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('Hello, World!');
});

//Listen on port 3000
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});