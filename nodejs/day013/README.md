[Install Mongo Database](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/) (change according to whatever OS you're on)
``console
npm install mongodb
```
Set database path to be within project folder:
```console
mongod --dbpath ./mongoDB
```

In another console, start script:
```console
node CRUDopmongoDB.js
```

Will return:
```console
Connected to MongoDB server
Found document: {
  _id: new ObjectId('66344ac188ebfa73f65a9cea'),
  name: 'Susie',
  age: 30
}
Found document: {
  _id: new ObjectId('66344ac188ebfa73f65a9cea'),
  name: 'Susie',
  age: 40
}
Remaining documents: []
```