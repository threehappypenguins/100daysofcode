<h1>Day 6 - Filter documents using find</h1>
<h3>Filter documents in your collection using the find method</h3>

```console
mongosh
```
```console
use mydatabase
```
Insert multiple documents so that there are documents to filter (paste as one line):
```console
db.mycollection.insertMany([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 },
    { name: "Eve", age: 22 }
])
```
Now filter the documents to find all the ages greater than 30:
```console
db.mycollection.find({ age: { $gt: 30 } })
```