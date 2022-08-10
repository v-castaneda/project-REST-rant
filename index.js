// require needed modules
const express = require("express");

// initialize the app object
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(3000, () => console.log("I am awake!"));
