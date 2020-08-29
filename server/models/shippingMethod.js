const mongoose = require("mongoose");

const shippingMethodSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      default: 0,
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

const shippingMethod = mongoose.model("shippingMethod", shippingMethodSchema);

module.exports = shippingMethod;
