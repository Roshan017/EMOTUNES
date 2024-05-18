const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const { MONGODB_URL } = process.env;
const UserRouter = require("./routers/User");

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const m = mongoose.connection;
m.on("error", (err) => {
  console.error("MongoDb Connection Error: ", err);
});
m.once("open", () => {
  console.log("Connected to DataBase");
});

app.use(cors());
app.use(express.json());

app.use("/Login", UserRouter);

app.listen(4000, () => {
  console.log(`App is Running on Port 4000`);
});
