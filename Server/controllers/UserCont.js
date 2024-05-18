const Usermodel = require("../models/usermodel");
const bcrypt = require("bcrypt");
const User_serv = require("../services/user");

const UserController = {
  async User_Reg(req, res) {
    const { Name, Email, Password, Confirm_Pwd } = req.body;

    try {
      console.log("Request Data:", req.body);

      if (!Name || !Email || !Password) {
        return res.status(400).json({ Message: "All fields are required" });
      }

      const User_exist = await User_serv.FindMail(Email);
      console.log("User Exist Check:", User_exist);

      if (User_exist) {
        return res.json("Exist");
      }
      if (Password != Confirm_Pwd) {
        return res.json("NO");
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(Password, salt);

      const NewUser = new Usermodel({
        Name,
        Email,
        Password: hashedPassword,
      });

      await NewUser.save();
      console.log("New User Saved:", NewUser);

      return res.json({ Message: "User Registered Successfully" });
    } catch (e) {
      console.error("Error in User Registration:", e);
      return res
        .status(500)
        .json({ Message: "Internal Error", Error: e.message });
    }
  },

  async User_Login(req, res) {
    try {
      const { Name, Password } = req.body;
      const User_Name = await User_serv.FindName(Name);
      console.log("UserName: ", User_Name);

      if (!User_Name) {
        return res.json("Null");
      }

      const Pass_match = await bcrypt.compare(Password, User_Name.Password);
      if (Pass_match) {
        return res.json("Match");
      } else {
        return res.json("Invalid");
      }
    } catch (e) {
      console.error("Error in User Login:", e);
      return res
        .status(500)
        .json({ Message: "Internal Error", Error: e.message });
    }
  },
};

module.exports = UserController;
