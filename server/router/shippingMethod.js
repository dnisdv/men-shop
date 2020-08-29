const express = require("express");
const shippingModel = require("../models/shippingMethod");
const router = express.Router();

router.post("/shipping", async (req, res) => {
  try {
    const category = await new shippingModel(req.body);
    category.save();
    res.send(category);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/shipping", async (req, res) => {
  try {
    if (req.query.filter) {
      const fil = JSON.parse(req.query.filter);
      const result = await shippingModel.find({
        _id: { $in: fil["id"] },
      });
      return res.send(result);
    }

    if (req.query.range) {
      const [from = 0, to = 4] = JSON.parse(req.query.range);

      const category = await shippingModel
        .find({})
        .limit(from - to - 1)
        .skip(from);

      const categoryLenght = await shippingModel.find({});
      const length = categoryLenght.length;

      return res
        .set("Content-Range", `products ${+from}-${+to}/${length}`)
        .send(category);
    }

    const category = await shippingModel.find({});
    res.send(category);
  } catch (e) {
    res.status(404).send("Not found");
  }
});

router.get("/shipping/:id", async (req, res) => {
  try {
    const category = await shippingModel.findById(req.params.id);
    res.send(category);
  } catch (e) {
    res.status(404).send("Not found");
  }
});

router.put("/shipping/:id", async (req, res) => {
  try {
    const update = await shippingModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );

    update.save();
    res.send(update);
  } catch (e) {
    res.send(e);
  }
});

router.delete("/shipping/:id", async (req, res) => {
  try {
    const category = await shippingModel.findByIdAndRemove({
      _id: req.params.id,
    });
    category.save();
    res.send(category);
  } catch (e) {
    res.status(404).send("Not found");
  }
});

module.exports = router;
