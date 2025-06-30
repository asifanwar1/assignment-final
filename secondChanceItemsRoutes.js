const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

router.get('/items', async (req, res) => {
  try {
    const db = await connectToDatabase(); // <-- This is the required line
    const items = await db.collection('items').find({}).toArray();
    res.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
