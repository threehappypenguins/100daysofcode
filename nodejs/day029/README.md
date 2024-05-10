```console
npm install express cors
node cors.js
```

Open a browser and navigate to (change `user` to your username): file:///home/user/100daysofcode/nodejs/day029/index.html
Alternatively, just open index.html where it's stored

Click `Fetch Data`, which will show `Hello, World!`.

In CORS, you can allow requests from a specific origin only:
```console
app.use(cors({
  origin: 'https://example.com'
}));
```