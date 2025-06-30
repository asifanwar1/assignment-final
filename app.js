const express = require('express');
const app = express();
const cors = require('cors');

// Import routes
const secondChanceItemsRoutes = require('./routes/secondChanceItemsRoutes');
const searchRoutes = require('./routes/searchRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', secondChanceItemsRoutes);
app.use('/', searchRoutes); // <-- This enables /api/secondchance/search

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
