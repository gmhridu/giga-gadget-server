const mongoose = require('mongoose');

// Connecting to MongoDB
const ConnectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
}

module.exports = ConnectDB;
