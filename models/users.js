const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  id: Number,
  username: String,
  name: String,
  lastname: String,
  avatar: String,
  email: String,
  password: String,
  token: String,
  region: String,
  wallet: Number,
  chats: [
    {
      type: mongoose.Schema.Types.String,
    },
  ],
  addedAt: Date,
});

module.exports = mongoose.model("Users", usersSchema);
