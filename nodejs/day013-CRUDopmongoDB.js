const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log('Connected to MongoDB server');

        // Get the database instance
        const db = client.db(dbName);
        
        // Get the collection
        const collection = db.collection('documents');

        // Insert a single document
        await collection.insertOne({ name: 'Susie', age: 30 });

        // Find a document
        const result = await collection.findOne({ name: 'Susie' });
        console.log('Found document:', result);

        // Update a document
        await collection.updateOne({ name: 'Susie' }, { $set: { age: 40 } });

        // Find all documents
        const cursor = collection.find({});
        const documents = await cursor.toArray();
        documents.forEach(doc => {
            console.log('Found document:', doc);
        });

        // Delete a document
        await collection.deleteOne({ name: 'Susie' });

        // Find all remaining documents
        const remainingDocs = await collection.find({}).toArray();
        console.log('Remaining documents:', remainingDocs);
        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        // Close the connection when done
        await client.close();
    }
}

main();