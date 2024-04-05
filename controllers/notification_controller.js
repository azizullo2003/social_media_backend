const { isValidObjectId } = require("mongoose");

module.exports.handleChatConnection = (io) => {
  io.on("connection", (socket) => {
    socket.on("like_post", async (data) => {
      try {
        const { senderId } = data;
        console.log(senderId);
        io.emit("post_liked", data);
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
