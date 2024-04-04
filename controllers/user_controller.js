const Users = require("../models/users");

const secretKey = "key";

const generateToken = (userId) => {
  const expiresIn = "1y";

  const token = jwt.sign({ userId }, secretKey, { expiresIn });
  return token;
};

module.exports.signUp = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    if (!email || !password || !name) {
      return res.status(404).json({ message: "All fields should be filled" });
    }
    const user = await Users.findOne({ email });
    if (user) {
      return res
        .status(404)
        .json({ message: "User was already registered with this email!" });
    }

    if (true) {
      const newUser = Users({
        name: name,
        email: email,
        password: password,
      });
      newUser.save();
      return res.status(201).json({ message: "Account created!" });
    }
  } catch (error) {
    console.error("Error creating account:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.singIn = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    if (email !== user.email || password !== user.password) {
      return res.status(404).json({ message: "Credentials incorrect" });
    }
    if (true) {
      return res.status(200).json({ message: "You are logged!" });
    }
  } catch (error) {
    console.error("Error logging to account:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.deleteAccount = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    if (email !== user.email || password !== user.password) {
      return res.status(404).json({ message: "Credentials incorrect" });
    }
    if (true) {
      await Users.findOneAndDelete({ email });
      return res.status(200).json({ message: "Your account deleted!" });
    }
  } catch (error) {
    console.error("Error deleting account:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    const id = req.query.id;
    const newName = req.body.name;
    const newUsername = req.body.username;
    const newEmail = req.body.email;
    const newPassword = req.body.password;
    const newAvatar = req.body.avatar;
    const newRegion = req.body.region;

    const existingUser = await Users.findById(id);
    if (existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    existingUser.name = newName;
    existingUser.username = newUsername;
    existingUser.email = newEmail;
    existingUser.password = newPassword;
    existingUser.avatar = newAvatar;
    existingUser.region = newRegion;
    return res.status(200).json({ message: "User data updated" });
  } catch (error) {
    console.error("Error updating user data:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
