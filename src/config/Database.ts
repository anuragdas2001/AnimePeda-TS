// src/config/database.ts

import { MongoClient } from 'mongodb';

// MongoDB Atlas connection string
const uri = "mongodb+srv://anuragdas:anuragdas@animepedia.lxe8tps.mongodb.net/";

async function connectToDatabase() {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");
        return client.db(); // Return the database object
    } catch (err) {
        console.error("Error connecting to MongoDB Atlas:", err);
        throw err;
    }
}

export default connectToDatabase;
