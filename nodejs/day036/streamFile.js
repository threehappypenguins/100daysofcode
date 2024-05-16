const fs = require('fs');

// Create a readable stream from a file
const readStream = fs.createReadStream('example.txt');

// Set up event listeners for the stream
readStream.on('data', (chunk) => {
    // Process each chunk of data
    console.log('Received a chunk of data:');
    console.log(chunk.toString());
  });

// Set up event listeners for the stream
readStream.on('error', (err) => {
    // Handle any errors that occur during the stream
    console.error('An error occurred:', err);
  });

readStream.on('end', () => {
    // Stream has ended, no more data to read
    console.log('Stream ended');
});