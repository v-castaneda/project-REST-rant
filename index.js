// GLOBALS AND DEPENDENCIES
require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");

// MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// CONTROLLERS
app.use("/places", require("./controllers/places"));

// ROUTES
app.get("/", (req, res) => {
  res.render("home");
});

app.get("*", (req, res) => {
  res.render("error404");
});

// LISTEN
app.listen(process.env.PORT, () => {
  console.log("I am awake!");
});
