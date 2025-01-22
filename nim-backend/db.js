const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://hashmihassan47:XZeK4NbPbUYakeFh@nim-game-cluster.cv9s9.mongodb.net/?retryWrites=true&w=majority&appName=nim-game-cluster';
const client = new MongoClient(uri);

let db;

async function connectToDB() {
  try {
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
