const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const Listing = require("./models/listing");

mongoose
  .connect("mongodb://localhost:27017/rentToGo")
  .then(() => {
    console.log("Mongo Connection Open!");
  })
  .catch((err) => {
    console.log("Mongo Connection Error!");
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// View all listings
app.get("/", async (req, res) => {
  const listings = await Listing.find({});
  res.render("listing", { listings });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
