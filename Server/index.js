const express = require("express");
require("dotenv").config();
const path = require("path");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const app = express();
const { MONGODB_URL } = process.env;

const User = require("./routers/User");
mongoose.connect(MONGODB_URL);
const m = mongoose.connection;
m.on("error", (er) => {
  console.error("MongoDb Connection Error: ", er);
});

m.once("open", () => {
  console.log("Connected to DataBase");
});

app.use("/Login", User);

app.use(
  cors({
    origin: "http://localhost:3000", // URL of your react app
  })
);
app.options("*", cors()); // Enable preflight for all routes
app.use(express.static(path.join(__dirname, "..", "Client", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "Client", "build", "index.html"));
});

app.listen(3000, () => {
  console.log(`App is Running of Port 3000`);
});
