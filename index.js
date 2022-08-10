// get enviroment variables
require("dotenv").config();

// require needed modules
const express = require("express");

// initialize the app object
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(process.env.PORT, () => console.log("I am very awake!"));
