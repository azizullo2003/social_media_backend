const mongoose = require("mongoose");

const transactionsSchema = new mongoose.Schema({
  id: Number,
  userId: String,
  amount: Number,
  paymentId: String,
  paymentMethod: String,
  status: String,
  addedAt: Date,
});

module.exports = mongoose.model("Comments", transactionsSchema);
