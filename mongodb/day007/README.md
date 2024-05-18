<h1>Day 7 - Update document</h1>
<h3>Update a document in your collection</h3>

```console
mongosh
```
```console
use mydatabase
```
Display document to note the current age:
```console
db.mycollection.findOne({ name: "Charlie" })
```
Paste as one line:
```console
db.mycollection.updateOne(
    { name: "Charlie" }, 
    { $set: { age: 36 } }
)
```
See if document changed:
```console
db.mycollection.findOne({ name: "Charlie" })
```