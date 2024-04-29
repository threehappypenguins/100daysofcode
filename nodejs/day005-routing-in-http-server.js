const http = require('http');

const server = http.createServer((req, res) => {
    //Get the requested URL path
    const url = req.url;

    // Send different responses based on the URL path
    if (url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Home Page!');
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About Us: Learn more about us.');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found: Page not found.');
    }
  });

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

  