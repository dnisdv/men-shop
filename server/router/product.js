const express = require("express");
const productModel = require("../models/product");
const reviewModel = require("../models/review");
const ordersModel = require("../models/order");
const fs = require("fs");
const router = express.Router();
var multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    const topdir = "./uploads";
    var dir = `./uploads/${req.ui}`;
    try {
      if (!fs.existsSync(topdir)) {
        fs.mkdirSync(topdir);
      }
    } catch (err) {
      console.error(err);
    }
    try {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
    } catch (err) {
      console.error(err);
    }

    callback(null, dir);
  },
  filename: function (req, file, callback) {
    if (file.mimetype === "image/jpeg") {
      var name = file.originalname + "." + "jpg";
    } else if (file.mimetype === "image/png") {
      name = file.originalname + "." + "png";
    }
    callback(null, name);
  },
});

var upload = multer({ dest: "uploads/", storage: storage }).array("imgs", 8);

router.post(
  "/products",
  function (req, res, next) {
    req.ui = Date.now();
    upload(req, res, function (err) {
      if (err) {
        return res.end("Something went wrong!");
      }
      next();
    });
  },
  (req, res) => {
    try {
      const product = new productModel({
        ...JSON.parse(req.body.data),
        images: req.files ? req.files : null,
      });
      product.save();
      res.send(product);
    } catch (e) {
      res.send(e);
    }
  }
);

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
    await ordersModel.deleteMany({ ["products.productID"]: req.params.id });
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
      const products = await productModel
        .find(
          { category: req.query.category },
          "title category quick_description price images"
        )
        .populate({
          path: "category",
          select: "title",
        });

      return res.send(products);
    }
    if (req.query.preview) {
      const products = await productModel
        .find({}, "title category quick_description price images")
        .populate({ path: "category", select: "title" });
      return res.send(products);
    }

    if (req.query.range) {
      const [from = 0, to = 4] = JSON.parse(req.query.range);

      const products = await productModel
        .find({})
        .limit(from - to - 1)
        .skip(from);

      const productsLenght = await productModel.find({});
      const length = productsLenght.length;
      return res
        .set("Content-Range", `products ${+from}-${+to}/${length}`)
        .send(products);
    }
    const products = await productModel.find({});
    res.send(products);
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
