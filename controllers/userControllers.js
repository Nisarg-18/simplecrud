const User = require("../models/userModel");

exports.home = (req, res) => {
  res.send("hello world");
};

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      throw new Error("name or email is missing");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("email already exsists");
    }
    const user = await User.create({ name, email });
    res.status(200).json({
      success: true,
      message: "user created successfully",
      user,
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      message: "users fetched successfully",
      users,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

exports.editUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "updated the user successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
      res.status(200).json({
        success: true,
        message: "user deleted successfully",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "deletion failed, please try again",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};
