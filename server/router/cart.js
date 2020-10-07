const express = require("express");
const router = express.Router();
const shortid = require("shortid");
const ShippModel = require("../models/shippingMethod");

const sendCart = (session, cb) => {
  if (!session) {
    return cb({ msg: "no cart items found" }, null);
  }
  const TotalPrice = session.reduce((a, i) => a + i.count * i.price, 0);
  const ShippPrice = session.reduce((a, i) => a + i.shipping_price, 0);
  const Total = TotalPrice + ShippPrice;
  return cb(null, { items: session, TotalPrice, ShippPrice, Total });
};

router.post("/cart/addProduct", (req, res) => {
  try {
    if (!req.body) return;
    let cart = req.session.product || [];
    if (req.session.product) {
      const product = req.session.product.map((i) => {
        return !!(
          i.productID === req.body.productID &&
          Object.entries(req.body.sku).toString() ===
            Object.entries(i.sku).toString() &&
          i.count++
        );
      });
      if (product.includes(true)) {
        return sendCart(req.session.product, (err, data) => {
          if (err) res.status(404).send(err);
          return res.send(data);
        });
      }
    }
    cart.push({ ...req.body, id: shortid.generate() });
    req.session.product = cart;
    return sendCart(req.session.product, (err, data) => {
      if (err) return res.status(404).send(err);
      return res.send(data);
    });
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.get("/cart/getProducts", (req, res) => {
  try {
    if (!req.session.product) {
      return res.send([]);
    }
    const TotalPrice = req.session.product.reduce(
      (a, i) => a + i.count * i.price,
      0
    ).toFixed(2)

    return res.send({
      items: req.session.product,
      TotalPrice: +TotalPrice,
    });
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.post("/cart/calculatecost", async (req, res) => {
  try {
    const ShippMethod = await ShippModel.findById(req.body.shippMethod);
    const subtotal = req.session.product.reduce(
      (a, i) => a + i.count * i.price,
      0
    );
    const shipping = ShippMethod.price;
    const total = subtotal + shipping;
      console.log(total)
    return res.send({
      subtotal,
      shipping,
      total,
    });
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/cart/increaseProduct", async (req, res) => {
  try {
    if (req.session.product) {
      await req.session.product.map((i) => {
        return !!(
          i.productID === req.body.productID &&
          Object.entries(req.body.sku).toString() ===
            Object.entries(i.sku).toString() &&
          i.count++
        );
      });
    }

    sendCart(req.session.product, (err, data) => {
      if (err) res.status(404).send(err);
      res.send(data);
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/cart/decreaseProduct", async (req, res) => {
  try {
    if (req.session.product) {
      await req.session.product.map((i) => {
        return !!(
          i.productID === req.body.productID &&
          Object.entries(req.body.sku).toString() ===
            Object.entries(i.sku).toString() &&
          i.count--
        );
      });
    }

    sendCart(req.session.product, (err, data) => {
      if (err) res.status(404).send(err);
      res.send(data);
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/cart/setCount", async (req, res) => {
  try {
    if (req.session.product) {
      await req.session.product.map((i) => {
        if (
          i.productID === req.body.productID &&
          Object.entries(req.body.sku).toString() ===
            Object.entries(i.sku).toString()
        )
          i.count = req.body.count || 0;
        return i.productID === req.body.productID;
      });
    }

    return sendCart(req.session.product, (err, data) => {
      if (err) res.status(404).send(err);
      return res.send(data);
    });
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.get("/cart/getcartlength", (req, res) => {
  try {
    if (!req.session.product) {
      return res.send({ value: 0 });
    }
    const cartLength = req.session.product.length;
    return res.send({ value: cartLength });
  } catch (e) {
    return res.status(500).send();
  }
});

router.post("/cart/deleteOne", async (req, res) => {
  try {
    if (!req.session.product) return res.sendStatus(400);
    req.session.product = await req.session.product.filter((i) => {
      return i.id !== req.body.id;
    });

    return sendCart(req.session.product, (err, data) => {
      if (err) res.status(404).send(err);
      return res.send(data);
    });
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.get("/cart/destroyAll", async (req, res) => {
  try {
    delete req.session.product;
    res.send("");
  } catch (e) {
    res.satus(500).send(e);
  }
});
module.exports = router;
