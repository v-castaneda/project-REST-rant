// get enviroment variables
require("dotenv").config();

// require needed modules
const express = require("express");

// initialize the app object
const app = express();

// define JSX view engine
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// import router
app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("*", (req, res) => {
  res.render("error404");
});

app.listen(process.env.PORT, () => console.log("I am awake!"));
