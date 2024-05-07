```console
npm install jsonwebtoken express express-jwt dotenv
```

Create a `.env` file with your secret key, like so (subbing `my_secret_key` with your own):
```console
USER_ID=user123
JWT_SECRET=my_secret_key
```

Run the app:
```console
node app.js
```

In another console, generate the token:
```console
cd nodejs/day026
node jwt-token.js
```

Copy the token and replace `<your_token>`:
```console
curl -X GET http://localhost:3000/protected -H "Authorization: Bearer <your_token>"
```