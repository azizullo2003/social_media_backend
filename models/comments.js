const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  id: Number,
  userId: String,
  senderId: String,
  repliedTo: String,
  editedAt: Date,
  addedAt: Date,
});

module.exports = mongoose.model("Comments", commentsSchema);
