const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true,  match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"] },
  number: { type: String, required: true },
  password: { type: String, required: true },
  // otp: {
  //   type: String,
  //   default: null,
  // },
});

module.exports = mongoose.model("User", UserSchema);
