```console
npm install mocha chai ansi-colors --save-dev
./node_modules/.bin/mocha testing-mocha-chai.js
```

Also, if necessary, edit the `package.json` file and add the line `"type": "module"`:
```console
{
  "name": "day023",
  "version": "1.0.0",
  "type": "module",
  "description": "",
  "main": "testing-mocha-chai.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "ansi-colors": "^4.1.3",
    "chai": "^5.1.0",
    "mocha": "^10.4.0"
  }
}

```

Console should show:
```console
  Math Function
    ✔ should add two numbers correctly
    ✔ should subtract two numbers correctly


  2 passing (8ms)
```