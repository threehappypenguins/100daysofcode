```console
npm install dotenv
node environment-var.js
```

The console should return:
```console
Server is running on port 4000
Database host: 127.0.0.1
API key: 1b88538c-127f-4103-a82d-80c373df0666
```

In the `.env` file, if no port is set, it defaults to `3000`, if no database host is set, it defaults to `localhost`, and if no API key is set, it returns `No API key provided`.