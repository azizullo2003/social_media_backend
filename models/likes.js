const mongoose = require("mongoose");

const likedSchema = new mongoose.Schema({
  id: Number,
  userId: String,
  senderId: String,
  likedItem: String,
  addedAt: Date,
});

module.exports = mongoose.model("Likes", likedSchema);
