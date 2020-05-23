const express = require("express");
const router = express.Router();
const shortid = require("shortid");

router.post("/cart/addProduct", async (req, res) => {
  try {
    if (!req.body) return;
    let cart = req.session.product || [];
    if (req.session.product) {
      const product = await req.session.product.map((i) => {
        return !!(
          i.productID === req.body.productID &&
          Object.entries(req.body.sku).toString() ===
            Object.entries(i.sku).toString() &&
          i.count++
        );
      });
      if (product.includes(true)) {
        return res.send(req.session.product);
      }
    }
    cart.push({ ...req.body, id: shortid.generate() });
    req.session.product = cart;
    res.send(req.session.product);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/cart/getProducts", async (req, res) => {
  try {
    if (!req.session.product) {
      return res.status(404).send({ msg: "no cart items found" });
    }
    // const fullPrice = req.session.product.reduce((i, s) => {
    //   return i.price * i.count + s.count * s.price;
    // });
    res.send(req.session.product);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/cart/increaseProduct", async (req, res) => {
  try {
    if (req.session.product) {
      const product = await req.session.product.map((i) => {
        return !!(
          i.productID === req.body.productID &&
          Object.entries(req.body.sku).toString() ===
            Object.entries(i.sku).toString() &&
          i.count++
        );
      });
      if (product.includes(true)) {
        return res.send(req.session.product);
      }
    }
    res.send(req.session.product);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/cart/decreaseProduct`", async (req, res) => {
  try {
    if (req.session.product) {
      const product = await req.session.product.map((i) => {
        return !!(
          i.productID === req.body.productID &&
          Object.entries(req.body.sku).toString() ===
            Object.entries(i.sku).toString() &&
          i.count--
        );
      });
      if (product.includes(true)) {
        return res.send(req.session.product);
      }
    }
    res.send(req.session.product);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/cart/setCount", async (req, res) => {
  try {
    if (req.session.product) {
      const product = await req.session.product.map((i) => {
        if (i.productID === req.body.productID) i.count = req.body.count || 0;
        return i.productID === req.body.productID;
      });

      if (product.includes(true)) {
        return res.send(req.session.product);
      }
    }
    res.send();
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/cart/getcartlength", (req, res) => {
  try {
    if (!req.session.product) {
      res.sendStatus(400);
    }
    const cartLength = req.session.product.length;
    res.send({ value: cartLength });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/cart/deleteOne", async (req, res) => {
  try {
    if (!req.session.product) return res.sendStatus(400);
    req.session.product = await req.session.product.filter((i) => {
      return i.id !== req.body.id;
    });
    res.send(req.session.product);
  } catch (e) {
    res.satus(500).send(e);
  }
});
module.exports = router;
