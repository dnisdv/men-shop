const express = require("express");
const productModel = require("../models/product");
const reviewModel = require("../models/review");
// const validator = require("../validation/validators");
const router = express.Router();

//Create product3
router.post("/products", async (req, res) => {
  try {
    const product = await new productModel(req.body);
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
  console.log(req.query);
  console.log(req.body);
  try {
    if (req.query.category) {
      return await productModel
        .find({}, "title category quick_description price images")
        .populate({
          path: "category",
          select: "title",
        })
        .exec((err, preview) => {
          preview = preview.filter((item) => {
            return item.category.title === req.query.category;
          });

          if (err) return res.status(500).send(err);

          return res.send(preview);
        });
    }
    if (req.query.preview) {
      return await productModel
        .find({}, "title category quick_description price images")
        .populate({ path: "category", select: "title" })
        .exec((err, preview) => {
          if (err) res.status(500).send(err);
          res.send(preview);
        });

      // res.send(preview);
    }
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
