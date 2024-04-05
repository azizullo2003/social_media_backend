const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
  id: Number,
  userId: String,
  imageUrl: String,
  videoUrl: String,
  text: String,
  views: Number,
  comments: [
    {
      type: mongoose.Schema.Types.String,
    },
  ],
  editedAt: Date,
  addedAt: Date,
  views: Number,
});

module.exports = mongoose.model("Posts", postsSchema);
