<h1>Day 8 - Handling POST Requests</h1>
<h3>Parse and handle POST requests in an Express app</h3>

```console
npm install express
node handling-POST-requests.js
```

In another console:
```console
curl -X POST -d "key=value" localhost:3000/submit
```

You will see:
```console
Form data received successfully!
```

In the original console, you will see:
```console
Received form data: { key: 'value' }
```