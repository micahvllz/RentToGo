const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  uploader: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  date_posted: {
    type: Date,
    required: true,
  },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
