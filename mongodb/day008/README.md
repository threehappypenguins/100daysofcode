<h1>Day 8 - Delete document</h1>
<h3>Delete a document from your collection</h3>

```console
mongosh
```
```console
use mydatabase
```
Display document to confirm it exists:
```console
db.mycollection.findOne({ name: "Charlie" })
```
Delete the document:
```console
db.mycollection.deleteOne({ name: "Charlie" })
```
Will return:
```console
{ acknowledged: true, deletedCount: 1 }
```
See if document exists:
```console
db.mycollection.findOne({ name: "Charlie" })
```
Will return:
```console
null
```