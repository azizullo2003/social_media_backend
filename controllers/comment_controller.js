const Comments = require("../models/comments");

module.exports.addComment = async (req, res) => {
  try {
    const text = req.body.text;
    const repliedTo = req.body.repliedTo;
    const userId = req.body.userId;

    const newComment = new Comments({
      text: text,
      userId: userId,
      repliedTo: repliedTo,
      addedAt: Date.now(),
    });
    newComment.save();
    return res.status(200).json({ message: "Comment added!" });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.deleteComment = async (req, res) => {
  try {
    const id = req.query.id;
    const comment = await Comments.findById(id);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    await Comments.findByIdAndDelete(id);
    return res.status(200).json({ message: "Comment deleted!" });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
