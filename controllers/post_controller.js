const Posts = require("../models/posts");

module.exports.addPost = async (req, res) => {
  try {
    const text = req.body.text;
    const imageUrl = req.body.imageUrl;
    const videoUrl = req.body.videoUrl;

    if (!text || (!imageUrl && !videoUrl)) {
      return res
        .status(404)
        .json({ message: "Add text or photo or video to post!" });
    }
    const newPost = Posts({
      text: text,
      imageUrl: imageUrl,
      videoUrl: videoUrl,
      addedAt: Date.now(),
    });
    newPost.save();
    return res.status(201).json({ message: "Post created!" });
  } catch (error) {
    console.error("Error creating account:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.editPost = async (req, res) => {
  try {
    const postId = req.query.id;
    const newText = req.body.text;
    const newImageUrl = req.body.imageUrl;
    const newVideoUrl = req.body.videoUrl;

    const existingPost = await Posts.findById(postId);
    if (!existingPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    existingPost.text = newText;
    existingPost.imageUrl = newImageUrl;
    existingPost.videoUrl = newVideoUrl;
    existingPost.editedAt = Date.now();
    existingPost.save();
    return res.status(301).json({ message: "Post edited!" });
  } catch (error) {
    console.error("Error editing post:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Posts.find();
    return res.status(200).json(posts);
  } catch (error) {
    console.error("Error getting posts:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.deletePost = async (req, res) => {
  console.log(1);
  try {
    const postId = req.query.id;
    const post = await Posts.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    await Posts.findByIdAndDelete(postId);
    return res.status(200).json({ message: "Post deleted successfully!" });
  } catch (error) {
    console.error("Error deleteing post:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
