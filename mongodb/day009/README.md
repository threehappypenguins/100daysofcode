<h1>Day 9 - Index creation</h1>
<h3>Create an index on a field in your collection</h3>

```console
mongosh
```
```console
use mydatabase
```
Now create an index on the field, name:
```console
db.mycollection.createIndex({ name: 1 })
```
Check the indexes that have been created:
```console
db.mycollection.getIndexes()
```
Should return:
```console
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { name: 1 }, name: 'name_1' }
]
```
Then, execute the following command to return all documents in the collection based on the `name` field in ascending order (`name: -1` will return in descending order):
```console
db.mycollection.find().sort({ name: 1 })
```