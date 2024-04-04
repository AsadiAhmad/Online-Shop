const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://ahmad:JDZnkUwf6Qci6JIk@cluster-0-130.81jyjqx.mongodb.net/';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let _db;

async function connectDB() {
    if (_db) {
        return _db;
    }
    try {
        await client.connect();
        console.log("Connected to MongoDB.");
        _db = client.db('myFirstDatabase');
    } catch (e) {
        console.error(e);
        throw e;
    }
    return _db;
}

async function closeDB() {
    if (client && client.isConnected()) {
        await client.close();
        console.log("Database connection closed.");
    }
}

module.exports = { connectDB, closeDB };


