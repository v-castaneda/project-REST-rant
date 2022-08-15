const router = require("express").Router();

// GET /places
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/restaurant-1.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/restaurant-2.jpg",
    },
  ];
  res.render("places/index", { places });
});

// NEW
router.get("/new", (req, res) => {
  res.render("./places/new");
});

module.exports = router;
