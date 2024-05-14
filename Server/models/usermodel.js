const mongoose = require("mongoose");
const path = require("path");

const User_model = mongoose.Schema({
  Name: {
    required: true,
    type: String,
  },

  Email: {
    required: true,
    type: String,
  },

  Password: {
    required: true,
    type: String,
  },
});

const UserModel = mongoose.model("UserModel", User_model);

module.exports = UserModel;
