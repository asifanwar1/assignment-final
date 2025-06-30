const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function connectToDB() {
  try {
    await client.connect(); // <--- Required line
    console.log("Connected to MongoDB");
    return client.db("secondChance");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

module.exports = connectToDB;
