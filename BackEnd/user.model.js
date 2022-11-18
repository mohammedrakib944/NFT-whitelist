const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    required: [true, "Email is required!"],
    type: String,
  },
  walletAddress: {
    required: [true, "Wallet Address is required!"],
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
