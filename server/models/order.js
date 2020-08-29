const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      },
    products: [
      {
        productID: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        count: {
          type: Number,
        },
        sku: {
          type: Object,
        },
      },
    ],
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    company: {
      type: String,
      default: "none",
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    zip: {
      type: Number,
    },
    state: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    fullPrice: {
      type: Number,
    },
    shippMethod: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "shippingMethod"
    },
    status: { type: mongoose.Schema.Types.ObjectId, ref: "OrderStatus" },
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

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
