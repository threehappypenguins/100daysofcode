<h1>Day 4 - Insert document</h1>
<h3>Insert a document into your collection</h3>

```console
mongosh
```
```console
use mydatabase
db.mycollection.insertOne({ name: "John", age: 30 })
db.mycollection.find()
```