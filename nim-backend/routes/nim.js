const express = require('express');
const { getDB } = require('../config/db');
const router = express.Router();

// Game state
let heaps = [1, 3, 5, 7];
let currentPlayer = 1; // 1 or 2

// Compute Nim-sum
function computeNimSum(heaps) {
  return heaps.reduce((acc, heap) => acc ^ heap, 0);
}

// Check if game is over
function isGameOver(heaps) {
  return heaps.every(heap => heap === 0);
}



// Routes

// Initialize the game
router.post('/initialize', async (req, res) => {
  const db = getDB();
  const heapsCollection = db.collection('heaps');

  try {
    // Initialize the heaps and set the current player
    const initialData = { heaps: [1, 3, 5, 7], currentPlayer: 1 };

    // Insert into the database (overwriting existing game state)
    await heapsCollection.deleteMany({}); // Clear previous game states
    await heapsCollection.insertOne(initialData);

    res.status(201).json({ message: 'Game initialized', data: initialData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to initialize the game' });
  }
});

// Get the current game state
router.get('/state', async (req, res) => {
  const db = getDB();
  const heapsCollection = db.collection('heaps');

  try {
    // Fetch the current game state
    const gameState = await heapsCollection.findOne({});
    if (!gameState) {
      return res.status(404).json({ error: 'No game state found. Initialize the game first.' });
    }
    res.json(gameState);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch the game state' });
  }
});

// Make a move
router.post('/move', async (req, res) => {
  const { heapIndex, removeCount } = req.body; // Client sends heapIndex and removeCount
  const db = getDB();
  const heapsCollection = db.collection('heaps');

  try {
    // Fetch the current game state
    const gameState = await heapsCollection.findOne({});
    if (!gameState) {
      return res.status(404).json({ error: 'No game state found. Initialize the game first.' });
    }

    const { heaps, currentPlayer } = gameState;

    // Validate the move
    if (heapIndex < 0 || heapIndex >= heaps.length || heaps[heapIndex] < removeCount) {
      return res.status(400).json({ error: 'Invalid move' });
    }

    // Update the heap
    heaps[heapIndex] -= removeCount;
    let nextPlayer;
    let message;
    if (isGameOver(heaps)){
      message = `Game Over, Player ${currentPlayer} loses`;
      nextPlayer = currentPlayer;
    }
    else {
      // Update the current player
      nextPlayer = currentPlayer === 1 ? 2 : 1;
      message = 'Move successful';
    }

    
    // Update the game state in the database
    await heapsCollection.updateOne({}, { $set: { heaps, currentPlayer: nextPlayer } });
    res.json({ message: message, heaps, currentPlayer: nextPlayer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to make the move' });
  }
});

// Reset the game
router.post('/reset', async (req, res) => {
  const db = getDB();
  const heapsCollection = db.collection('heaps');

  try {
    // Reset the game state
    const initialData = { heaps: [1, 3, 5, 7], currentPlayer: 1 };

    await heapsCollection.deleteMany({}); // Clear existing state
    await heapsCollection.insertOne(initialData);

    res.json({ message: 'Game reset', data: initialData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to reset the game' });
  }
});

module.exports = router;
