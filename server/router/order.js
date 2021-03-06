const express = require("express");
const orderModel = require("../models/order");
const shippingModel = require("../models/shippingMethod");
const router = express.Router();

router.post("/orders", async (req, res) => {
  try {
    const Shipping = await shippingModel.findById(
      req.body.data.selectedShipping
    );
    const order = await new orderModel({
      ...req.body.data,
      products: req.body.cart,
      fullPrice:
        req.body.cart.reduce((a, i) => a + i.count * i.price, 0) +
        Shipping.price,
      shippMethod: req.body.data.selectedShipping,
    });
    order.save();
    delete req.session.product;
    res.send(order);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/orders", async (req, res) => {
  try {
    if (req.query.filter) {
      const fil = JSON.parse(req.query.filter);

      const ids = await fil["id"].map((i) => i._id);
      const result = await orderModel.find({
        _id: { $in: ids },
      });
      return res.send(result);
    }
    if (req.query.range) {
      const [from = 0, to = 4] = JSON.parse(req.query.range);

      const orders = await orderModel
        .find({})
        .limit(from - to - 1)
        .skip(from);

      const ordersLenght = await orderModel.find({});
      const length = ordersLenght.length;

      return res
        .set("Content-Range", `products ${+from}-${+to}/${length}`)
        .send(orders);
    }

    const orders = await orderModel.find({});
    res.send(orders);
  } catch (e) {
    res.status(404).send("Not found");
  }
});

router.get("/orders/:id", async (req, res) => {
  try {
    const order = await orderModel
      .findById(req.params.id)
      .populate("products.productID shippMethod");
    res.send(order);
  } catch (e) {
    res.status(404).send("Not found");
  }
});

router.put("/orders/:id", async (req, res) => {
  try {
    const update = await orderModel.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body }
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

router.get("/ordersByUser", async (req, res) => {
  try {
    const orders = await orderModel
      .find({ user: req.session.userId })
      .populate("products.productID status");
    res.send(orders);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
