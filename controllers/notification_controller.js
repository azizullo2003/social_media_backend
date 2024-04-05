const { isValidObjectId } = require("mongoose");
const Likes = require("../models/likes");

module.exports.handleChatConnection = (io) => {
  io.on("connection", (socket) => {
    socket.on("like_post", async (data) => {
      try {
        const { userId, senderId, itemId } = data;
        console.log(senderId);
        io.emit("post_liked", data);

        const like = new Likes({
          userId: userId,
          senderId: senderId,
          itemId: itemId,
          addedAt: Date.now(),
        });
        await like.save();
      } catch (error) {
        console.error("Error sending chat message:", error);
        socket.emit("error", "Something went wrong");
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};
