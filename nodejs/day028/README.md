```console
npm init && npm pkg set type="module"
npm install @apollo/server graphql-tag
node server.js
```

Navigate to http://localhost:4000/

In the ExampleQuery tab, under Operation, try querying:
```console
query {
  hello
}
```
Click run. On the left-hand side, you will see return:
```console
{
  "data": {
    "hello": "Hello, GraphQL!"
  }
}
```

Also try the following query (the id actually doesn't matter since we're using mock data):
```console
query {
  user(id: "1") {
    id
    name
    email
  }
}
```

You will see returned:
```console
{
  "data": {
    "user": {
      "id": "1",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
}
```

Now try the following mutation:
```console
mutation {
  createUser(name: "Bob") {
    id
    name
    email
  }
}
```

Will return:
```console
{
  "data": {
    "createUser": {
      "id": "123",
      "name": "Bob",
      "email": null
    }
  }
}
```