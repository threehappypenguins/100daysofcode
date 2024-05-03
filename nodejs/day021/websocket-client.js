const WebSocket = require('ws');

// Create a WebSocket connection to your server
const socket = new WebSocket('ws://localhost:8080');

// Event handler for when the connection is established
socket.onopen = function() {
    console.log('Connected to WebSocket server');

    // Send a message to the server
    socket.send('Hello server!');
};

// Event handler for incoming messages from the server
socket.onmessage = function(event) {
    console.log('Received message from server:', event.data);
};

// Event handler for WebSocket errors
socket.onerror = function(error) {
    console.error('WebSocket error:', error);
};

// Event handler for when the connection is closed
socket.onclose = function(event) {
    console.log('WebSocket connection closed:', event.code, event.reason);
};