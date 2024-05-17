1. Generate a secure secret:
```console
node -e "console.log(require('crypto').randomBytes(64).toString('hex'));"
```
2. Paste your secret key in the .env file and save:
```console
SESSION_SECRET=your_secret_key
```
Note that if you do not first create the secret key in the .env file first, when you install `express-session` you will get a message stating that it's deprecated.
3. Now install necessary packages:
```console
npm install express express-session passport passport-github2 dotenv
```
4. Register a new oAuth application on [Github](https://github.com/settings/developers).
5. Paste your client ID and secret into the .env file as well:
```console
CLIENT_ID=your_client_id
CLIENT_SECRET=your_client_secret
```

6. 
```console
npm start
```

Sign in and authorize.