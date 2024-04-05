const mongoose = require("mongoose");
require("dotenv").config();

const connectionString = process.env.DB_STRING;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToDatabase;
