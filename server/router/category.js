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
    if (req.query.filter) {
      const fil = JSON.parse(req.query.filter);
      const result = await categoryModel.find({
        _id: { $in: fil["id"] },
      });
      return res.send(result);
    }

    if (req.query.range) {
      const [from = 0, to = 4] = JSON.parse(req.query.range);

      const category = await categoryModel
        .find({})
        .limit(from - to - 1)
        .skip(from);

      const categoryLenght = await categoryModel.find({});
      const length = categoryLenght.length;

      return res
        .set("Content-Range", `products ${+from}-${+to}/${length}`)
        .send(category);
    }

    const category = await categoryModel.find({});
    res.send(category);
  } catch (e) {
    res.status(404).send("Not found");
  }
});

router.get("/category/:id", async (req, res) => {
  try {
    const category = await categoryModel.findById(req.params.id);
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
