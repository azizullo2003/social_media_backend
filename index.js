const express = require("express");
let app = express();
const port = 3000;
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const connect_database = require("./utils/db_connect.js");
const { upload } = require("./utils/upload.js");

//controllers
const user_controller = require("./controllers/user_controller.js");
const post_controller = require("./controllers/post_controller.js");
const comment_controller = require("./controllers/comment_controller.js");
const media_file_controller = require("./controllers/media_files_controller.js");

connect_database();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//User endpoints
app.post("/signup", user_controller.signUp);
app.post("/signin", user_controller.singIn);
app.delete("/delete_account", user_controller.deleteAccount);

//Post enpoints
app.post("/add_post", post_controller.addPost);
app.get("/posts", post_controller.getAllPosts);
app.delete("/delete_post", post_controller.deletePost);
app.put("/edit_post", post_controller.editPost);

//Comments emdpoints
app.post("/add_comment", comment_controller.addComment);
app.delete("/delete_comment", comment_controller.deleteComment);

//Upload media files
app.post(
  "/upload_image",
  upload.single("image"),
  media_file_controller.uploadImage
);

app.post(
  "/upload_video",
  upload.single("video"),
  media_file_controller.uplaodVideo
);

app.get("/uploads/:file_name", media_file_controller.getFile);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
