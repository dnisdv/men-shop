const express = require("express");
const router = express.Router();
const shortid = require("shortid");

const sendCart = async (session, cb) => {
  if (!session) {
    return cb({ msg: "no cart items found" }, null);
  }
  const TotalPrice = await session.reduce((a, i) => a + i.count * i.price, 0);
  const ShippPrice = await session.reduce((a, i) => a + i.shipping_price, 0);
  const Total = TotalPrice + ShippPrice;
  cb(null, { items: session, TotalPrice, ShippPrice, Total });
};

router.post("/cart/addProduct", async (req, res) => {
  try {
    if (!req.body) return;
    let cart = req.session.product || [];
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
    cart.push({ ...req.body, id: shortid.generate() });
    req.session.product = cart;

    sendCart(req.session.product, (err, data) => {
      if (err) res.status(404).send(err);
      res.send(data);
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/cart/getProducts", async (req, res) => {
  try {
    return sendCart(req.session.product, (err, data) => {
      if (err) res.status(404).send(err);
      res.send(data);
    });
  } catch (e) {
    res.status(500).send(e);
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
        if (i.productID === req.body.productID) i.count = req.body.count || 0;
        return i.productID === req.body.productID;
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

router.get("/cart/getcartlength", (req, res) => {
  try {
    if (!req.session.product) {
      return res.sendStatus(400);
    }
    const cartLength = req.session.product.length;
    res.send({ value: cartLength });
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/cart/deleteOne", async (req, res) => {
  try {
    if (!req.session.product) return res.sendStatus(400);
    console.log(req.session.product);
    req.session.product = await req.session.product.filter((i) => {
      return i.id !== req.body.id;
    });

    sendCart(req.session.product, (err, data) => {
      if (err) res.status(404).send(err);
      res.send(data);
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/cart/destroyAll", async (req, res) => {
  try {
    delete req.session.product;
    res.send("HELLLL");
  } catch (e) {
    res.satus(500).send(e);
  }
});
module.exports = router;
