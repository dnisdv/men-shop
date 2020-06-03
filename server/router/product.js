const express = require("express");
const productModel = require("../models/product");
const reviewModel = require("../models/review");
// const validator = require("../validation/validators");
const router = express.Router();
var multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    if (file.mimetype === "image/jpeg") {
      var name = Date.now() + "." + "jpg";
    } else if (file.mimetype === "image/png") {
      name = Date.now() + "." + "png";
    }
    callback(null, name);
  },
});

var upload = multer({ dest: "uploads/", storage: storage }).array("imgs", 8);

router.post("/products", upload, async (req, res) => {
  console.log(JSON.parse(req.body.data));
  try {
    const product = await new productModel({
      ...JSON.parse(req.body.data),
      images: req.files ? req.files : null,
    });
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
      // const { page = 0, limit = 2 } = req.query;

      const products = await productModel
        .find(
          { category: req.query.category },
          "title category quick_description price images"
        )
        .populate({
          path: "category",
          select: "title",
        });
      // .limit(limit * 1)
      // .skip(page * limit);

      // const count = await productModel
      //   .find({ category: req.query.category }, "title")
      //   .countDocuments();

      return res.send({
        products,
        // totalPages: Math.ceil(count / limit),
        // currentPage: +page,
        // totalProducts: count,
      });
    }
    if (req.query.preview) {
      // const { page = 0, limit = 2 } = req.query;

      // const count = await productModel.find({}).countDocuments();

      const product = await productModel
        .find({}, "title category quick_description price images")
        .populate({ path: "category", select: "title" });
      // .limit(limit * 1)
      // .skip(page * limit);

      return res.send({
        product,
        // totalPages: Math.ceil(count / limit),
        // currentPage: +page,
        // totalProducts: count,
      });
    }

    // if (req.query.filter) {
    //   const fil = JSON.parse(req.query.filter);

    //   const result = await productModel.find({
    //     _id: { $in: fil["id"] },
    //   });
    //   return res.send(result);
    // }

    const [from = 0, to = 4] = JSON.parse(req.query.range);

    const products = await productModel
      .find({})
      .limit(from - to)
      .skip(from);

    const productsLenght = await productModel.find({});
    const length = productsLenght.length;
    res
      .set("Content-Range", `products ${+from}-${+to}/${length}`)
      .send(products);
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
