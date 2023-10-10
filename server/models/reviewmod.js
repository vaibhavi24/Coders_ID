const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  reviewText: String,
  rating: Number,
  companyName: String,
});

const ReviewModel = mongoose.model('Review', reviewSchema);

module.exports = ReviewModel;
