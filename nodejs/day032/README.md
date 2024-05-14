```console
npm install passport passport-local express express-session connect-flash
node app.js
```

In another console:
```console
cd nodejs/day032
```

Test the authentication setup:
```console
curl -X POST \
  -d "email=test@example.com&password=password123" \
  http://localhost:3000/register
```

Log in with the newly registered user:
```console
curl -X POST \
  -d "email=test@example.com&password=password123" \
  -c cookies.txt \
  http://localhost:3000/login
```

Now that you're logged in, you will be able to access the protected route:
```console
curl -b cookies.txt http://localhost:3000/dashboard
```