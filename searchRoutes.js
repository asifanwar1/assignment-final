const express = require('express');
const connectToDatabase = require('../models/db');

const router = express.Router();

// Route: GET /api/search?category=electronics
router.get('/api/search', async (req, res) => {
  const { category } = req.query;

  try {
    const db = await connectToDatabase();
    const query = {};

    if (category) {
      query.category = category;
    }

    const results = await db.collection('items').find(query).toArray();
    res.json(results);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
