```console
npm install express multer
node file-uploads.js
```

In another console:
```console
curl -X POST -F "file=@$HOME/100daysofcode/nodejs/day009/public/images/penguin.jpg" http://localhost:3000/upload
```

This will upload a file to the `/uploads` directory.