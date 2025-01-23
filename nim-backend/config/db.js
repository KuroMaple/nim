const { MongoClient } = require('mongodb');
require('dotenv').config();
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

let db;

async function connectToDB() {
  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db('nimGameDB'); // Replace 'nimGameDB' with your desired database name
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
}

function getDB() {
  if (!db) {
    throw new Error('Database not initialized. Call connectToDB first.');
  }
  return db;
}

module.exports = { connectToDB, getDB };
