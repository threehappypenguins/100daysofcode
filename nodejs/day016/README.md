```console
npm install express express-session cookie-parser
node sessions-cookies.js
```

In another console:
```console
curl -X POST -H "Content-Type: application/json" -d '{"username":"user1","password":"password1"}' -c ~/100daysofcode/nodejs/day016/cookies.txt http://localhost:3000/login
```

This will create a cookies.txt file. Now to test access to the `/protected` page:
```console
curl -b ~/100daysofcode/nodejs/day016/cookies.txt http://localhost:3000/protected
```