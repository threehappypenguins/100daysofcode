```console
npm install express jsonwebtoken
export SECRET_KEY=your_secret_key_here
node JWT.js
```
*Note: sub `your_secret_key_here` with key of choice.

In another console:
```console
curl -X POST -H "Content-Type: application/json" -d '{"username": "user1", "password": "your_secret_key_here"}' http://localhost:3000/login
```
*Note: sub `your_secret_key_here` with key of choice.

A token will be returned. Copy the token a replace `your_jwt_token_here` with it:

```console
curl -H "Authorization: Bearer your_jwt_token_here" http://localhost:3000/protected
```