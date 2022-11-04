const mongoose = require("mongoose");
const Review = require("./review");

let listingSchema = new mongoose.Schema(
  {
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
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    reviews: [Review.schema],
  },
  {
    timestamps: true,
  }
);

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
