const express = require("express");
const orderStatusModel = require("../models/orderStatus");
const router = express.Router();

router.post("/status", async (req, res) => {
  try {
    const orderStatus = await new orderStatusModel(req.body);
    orderStatus.save();
    res.send(orderStatus);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/status", async (req, res) => {
  try {
    if (req.query.range) {
      const [from = 0, to = 4] = JSON.parse(req.query.range);

      const ordersStatus = await orderStatusModel
        .find({})
        .limit(from - to - 1)
        .skip(from);
      const ordersLenght = await orderStatusModel.find({});
      const length = ordersLenght.length;

      return res
        .set("Content-Range", `products ${+from}-${+to}/${length}`)
        .send(ordersStatus);
    }

    const ordersStatus = await orderStatusModel.find({});
    res.send(ordersStatus);
  } catch (e) {
    res.status(404).send("Not found");
  }
});

router.get("/status/:id", async (req, res) => {
  try {
    const order = await orderStatusModel.findById(req.params.id);
    res.send(order);
  } catch (e) {
    res.status(404).send("Not found");
  }
});

router.put("/status/:id", async (req, res) => {
  try {
    const update = await orderStatusModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );

    update.save();
    res.send(update);
  } catch (e) {
    res.send(e);
  }
});

router.delete("/status/:id", async (req, res) => {
  try {
    const order = await orderStatusModel.findByIdAndRemove({
      _id: req.params.id,
    });
    order.save();
    res.send(order);
  } catch (e) {
    res.status(404).send("Not found");
  }
});

module.exports = router;
