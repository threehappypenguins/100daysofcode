const WebSocket = require('ws');

// Create a websocket server
const wss = new WebSocket.Server({ port: 8080 });

// Connection event handler
wss.on('connection', function connection(ws) {
    console.log('Client connected');

    // Message event handler
    ws.on('message', function incoming(message) {
        console.log('Received message:', message.toString());

        // Send a message back to the client
        ws.send('Hello client!');
    });

    // Close event handler
    ws.on('close', function close() {
        console.log('Client disconnected');
    });
});