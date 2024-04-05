const path = require("path");
const port = 3001;

module.exports.getFile = async (req, res) => {
  const imageName = req.params.file_name;
  const imagePath = path.join(__dirname, "..", "uploads", imageName);
  res.sendFile(imagePath);
};

module.exports.uploadImage = async (req, res) => {
  if (!req.file) {
    res.status(400).send("No file uploaded.");
    return;
  }
  res.status(200).send({
    imageUrl: "http://localhost:" + port + "/uploads/" + req.file.originalname,
  });
};

module.exports.uploadVideo = async (req, res) => {
  if (!req.file) {
    res.status(400).send("No file uploaded.");
    return;
  }
  res.status(200).send({
    videoUrl: "http://localhost:" + port + "/uploads/" + req.file.originalname,
  });
};
