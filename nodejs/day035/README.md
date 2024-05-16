```console
npm install express @apollo/server graphql graphql-tag
npm start
```

Navigate to http://localhost:4000/ and you will see "Welcome to the GraphQL API"

Navigate to http://localhost:4000/graphql

Enter the following query in the Playground and click the "Play" button to execute it:
```console
{
  hello
}
```

Expected response:
```console
{
  "data": {
    "hello": "Hello, world!"
  }
}
```

Query to create user:
```console
mutation {
  createUser(name: "John Doe") {
    id
    name
    email
  }
}
```

Response:
```console
{
  "data": {
    "createUser": {
      "id": "1",
      "name": "John Doe",
      "email": "John Doe@example.com"
    }
  }
}
```

Query:
```console
query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
  }
}
```
Query variables (bottom of screen):
```console
{
  "id": 1
}
```

Response:
```console
{
  "data": {
    "user": {
      "id": "1",
      "name": "John Doe",
      "email": "John Doe@example.com"
    }
  }
}
```