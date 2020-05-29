const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    title: {
      type: String,
      required: true,
    },
    quick_description: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    characteristics: [
      {
        title: {
          type: String,
        },
        value: {
          type: String,
        },
      },
    ],
    rate: {
      type: Number,
      required: true,
    },
    stock: [
      {
        title: {
          type: String,
        },
        data: [
          {
            value: {
              type: String,
            },
            qnt: {
              type: Number,
              required: true,
            },
          },
        ],
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    shipping_price: {
      type: Number,
      required: true,
    },
    images: [
      {
        src: {
          type: String,
        },
        rawFile: {
          type: Object,
        },
        title: {
          type: String,
        },
      },
    ],

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

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
