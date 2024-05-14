const Usermodel = require("../models/usermodel");
const bcrypt = require("bcrypt");
const User_serv = require("../services/user");

const UserController = {
  async User_Reg(req, res) {
    const { Name, Email, Password } = req.body;

    try {
      // Check if the user already exists
      const User_exist = await User_serv.Find(Name); // Better to use Email to check uniqueness
      if (User_exist) {
        return res.status(400).json({ Message: "User Already Exists" });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(Password, salt);

      // Create a new user instance and save it to the database
      const NewUser = new Usermodel({
        Name,
        Email,
        Password: hashedPassword,
      });
      await NewUser.save();

      res.json({ Message: "User Registered Successfully" });
    } catch (e) {
      console.error(e);
      res.status(500).json({ Message: "Internal Error" });
    }
  },
};

module.exports = UserController;
