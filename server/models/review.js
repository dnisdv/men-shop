const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    username: {
      type: String,
      required: true,
      default: "Anonymous",
    },
    email: {
      type: String,
    },
    title: {
      type: String,
      require: true,
    },
    review: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    created_at: {
      type: Date,
    },
    updated_at: {
      type: Date,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
