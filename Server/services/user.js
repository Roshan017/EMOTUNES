const UserModel = require("../models/usermodel");

const User_serv = {
  async Find(Name) {
    const User = await UserModel.findOne({ Name });
    return User;
  },
};
module.exports = User_serv;
