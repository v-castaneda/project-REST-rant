// get enviroment variables
require("dotenv").config();

// require needed modules
const express = require("express");

// initialize the app object
const app = express();

// import router
app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

app.listen(process.env.PORT, () => console.log("I am awake!"));
