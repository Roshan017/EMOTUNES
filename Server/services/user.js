const Usermodel = require("../models/usermodel");

const User_serv = {
  async FindMail(email) {
    return await Usermodel.findOne({ Email: email });
  },
  async FindName(name) {
    return await Usermodel.findOne({ Name: name });
  },
};

module.exports = User_serv;
