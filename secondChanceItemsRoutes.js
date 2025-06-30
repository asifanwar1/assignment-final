const express = require('express');
const { ObjectId } = require('mongodb');
const connectToDatabase = require('../models/db');

const router = express.Router();

// Route: GET /api/secondchance/items
router.get('/api/secondchance/items', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const items = await db.collection('items').find({}).toArray();
    res.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route: GET /api/secondchance/items/:id
router.get('/api/secondchance/items/:id', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const item = await db.collection('items').findOne({ _id: new ObjectId(req.params.id) });
    
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json(item);
  } catch (error) {
    console.error('Error fetching item:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
