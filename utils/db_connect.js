const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://azizullo:fsBXTqjkzyMB73P3@cluster0.tdhhdrc.mongodb.net/social_media?retryWrites=true&w=majority";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(connectionString, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToDatabase;
