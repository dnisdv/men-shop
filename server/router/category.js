const express = require("express");
const categoryModel = require("../models/category");
const router = express.Router();

router.post("/category", async (req, res) => {
  try {
    const category = await new categoryModel(req.body);
    category.save();
    res.send(category);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/category", async (req, res) => {
  try {
    const category = await categoryModel.find({});
    const categoryLength = category.length;
    res.set("Content-Range", `category 0-24/${categoryLength}`).send(category);
  } catch (e) {
    res.status(404).send("Not found");
  }
});

router.get("/category/:id", async (req, res) => {
  try {
    const category = await categoryModel.find({ _id: req.params.id });
    res.send(category);
  } catch (e) {
    res.status(404).send("Not found");
  }
});

router.put("/category/:id", async (req, res) => {
  try {
    const update = await categoryModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );

    update.save();
    res.send(update);
  } catch (e) {
    res.send(e);
  }
});

router.delete("/category/:id", async (req, res) => {
  try {
    const category = await categoryModel.findByIdAndRemove({
      _id: req.params.id,
    });
    category.save();
    res.send(category);
  } catch (e) {
    res.status(404).send("Not found");
  }
});

module.exports = router;
