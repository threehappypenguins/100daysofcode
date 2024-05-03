```console
npm install express
node restful-API.js
```

In a browser, navigate to `http://localhost:3000/books/1` or `http://localhost:3000/books/2` or `http://localhost:3000/books/3`

To create a new book, in another console:

```console
curl -X POST -H "Content-Type: application/json" -d '{"title":"New Book","author":"New Author"}' http://localhost:3000/books
```

To update a book:

```console
curl -X PUT -H "Content-Type: application/json" -d '{"title":"Updated Title","author":"Updated Author"}' http://localhost:3000/books/1
```

To delete a book:

```console
curl -X DELETE http://localhost:3000/books/1
```