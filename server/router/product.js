const express = require("express");
const productModel = require("../models/product");
const reviewModel = require("../models/review");
const validator = require("../validation/validators");
const router = express.Router();

//Creat product
router.post("/products", async (req, res) => {
  try {
    console.log(req.body);
    const product = await productModel(req.body);
    product.save();

    res.send(product);
  } catch (e) {
    res.send(e);
  }
});

//Find prouduct
router.get("/products/:id", async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    res.send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});

//Remove one product
router.delete("/products/:id", async (req, res) => {
  try {
    const product = await productModel.findOneAndDelete(req.params.id);
    await reviewModel.deleteMany({ product: req.params.id });
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});

//get many products && get products by filter
router.get("/products", async (req, res) => {
  try {
    if (req.query.filter) {
      const filter = JSON.parse(req.query.filter);
      const records = await productModel
        .find()
        .where("_id")
        .in(filter.id)
        .exec();
      if (!records) return res.status(404).send("Nothing found");
      return res.send(records);
    }
    const products = await productModel.find({});
    const productsLenght = products.length;
    // console.log(products.length);
    res.set("Content-Range", `products 0-24/${productsLenght}`).send(products);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.put("/products/:id", async (req, res) => {
  try {
    const update = await productModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    update.save();

    res.send(update);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
