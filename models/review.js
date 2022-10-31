const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  reviewer: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date_commented: {
    type: Date,
    required: true,
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
