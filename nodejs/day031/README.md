```console
npm install express express-validator
node app.js
```

To test a successful validation, in another console:
```console
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "username": "validuser",
    "email": "validemail@example.com",
    "password": "validpassword"
  }' \
  http://localhost:3000/register
  ```

  To test an unsuccessful validation (piping through `jq` is to make it more readable):
  ```console
  curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "username": "user",
    "email": "invalidemail",
    "password": "12345"
  }' \
  http://localhost:3000/register | jq
  ```