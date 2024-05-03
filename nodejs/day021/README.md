```console
node basic-websocket-server.js
```

In another console:
```console
cd ~/100daysofcodenodes/day021
node websocket-client.js
```

First console should return:
```console
Client connected
Received message: Hello server!
```

Second console should return:
```console
Connected to WebSocket server
Received message from server: Hello client!
```

If basic-websocket-server.js is closed first, second console shows:
```console
WebSocket connection closed: 1006
```

If websocket-client.js is closed first, first console shows:
```console
Client disconnected
```