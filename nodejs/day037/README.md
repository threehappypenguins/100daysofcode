```console
npm install express
npm start
```

Navigate to http://localhost:3000/api/items?page=1 and the first five items will print.
Navigate to http://localhost:3000/api/items?page=2 and the last five items will print.

The max page items is set to 5 by default. This can be overriden with the following:
http://localhost:3000/api/items?page=1&pageSize=10