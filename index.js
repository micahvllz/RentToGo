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
  res.redirect("/listings");
});

app.get("/listings", async (req, res) => {
  const listings = await Listing.find({});
  res.render("listing", { listings });
});

// Form to add new Listing
app.get("/listings/add", (req, res) => {
  res.render("add-listing");
});

// Add listing to database
app.post("/listings", async (req, res) => {
  const listing = new Listing(req.body);
  await listing.save();
  res.redirect(`/listings/${listing._id}`);
});

// Form to edit specific listing
app.get("/listings/:id/edit", async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  res.render("edit-listing", { listing });
});

// Update specific listing on database
app.put("/listings/:id", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.redirect(`/listings/${listing._id}`);
});

// Delete specific listing from database
app.delete("/listings/:id", async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
});

// View specific listing
app.get("/listings/:id", async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  res.render("view-listing", { listing });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
