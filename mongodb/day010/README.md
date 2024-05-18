<h1>Day 10 - Drop collection</h1>
<h3>Drop a collection in your database</h3>

```console
mongosh
```
```console
use mydatabase
show collections
```
Drop (delete) the collection:
```console
db.mycollection.drop()
show collections
```