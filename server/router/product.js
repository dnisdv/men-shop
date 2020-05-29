const express = require("express");
const productModel = require("../models/product");
const reviewModel = require("../models/review");
// const validator = require("../validation/validators");
const router = express.Router();

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
    }
    if (req.query.filter) {
      const fil = JSON.parse(req.query.filter);

      // const ids = await fil["id"].map((i) => i._id);
      const result = await productModel.find({
        _id: { $in: fil["id"] },
      });
      return res.send(result);
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
