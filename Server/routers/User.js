const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserCont");

router.post("/", UserController.User_Reg);
router.post("/signup", UserController.User_Login);

module.exports = router;
