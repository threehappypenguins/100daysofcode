```console
npm install express jsonwebtoken
node basic-authentication.js
```

In another console:
```console
curl -X POST -H "Content-Type: application/json" -d '{"username":"user1","password":"password1"}' http://localhost:3000/login
```
Replace `your_token_here` with your token`:
```console
curl -H "Authorization: Bearer your_token_here" http://localhost:3000/protected
```