const express = require("express");
const orderModel = require("../models/order");
const router = express.Router();

router.post("/orders", async (req, res) => {
  try {
    const order = await new orderModel(req.body);
    order.save();
    res.send(order);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/orders", async (req, res) => {
  try {
    const orders = await orderModel.find({});
    const ordersLength = orders.length;
    res.set("Content-Range", `orders 0-24/${ordersLength}`).send(orders);
  } catch (e) {
    res.status(404).send("Not found");
  }
});

router.get("/orders/:id", async (req, res) => {
  try {
    const order = await orderModel.find({ _id: req.params.id });
    res.send(order);
  } catch (e) {
    res.status(404).send("Not found");
  }
});

router.put("/orders/:id", async (req, res) => {
  try {
    const update = await orderModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );

    update.save();
    res.send(update);
  } catch (e) {
    res.send(e);
  }
});

router.delete("/orders/:id", async (req, res) => {
  try {
    const order = await orderModel.findByIdAndRemove({ _id: req.params.id });
    order.save();
    res.send(order);
  } catch (e) {
    res.status(404).send("Not found");
  }
});

module.exports = router;
