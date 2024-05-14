const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = express.Router();
const cors = require("cors");

const UserController = require("../controllers/UserCont");

router.use(bodyParser.json());
router.use(express.json());

router.post("/", cors(), UserController.User_Reg);

module.exports = router;
