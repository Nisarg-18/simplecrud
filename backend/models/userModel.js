const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    maxLength: [25, "max length is 25"],
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "email is required"],
  },
});

module.exports = mongoose.model("User", userSchema);
