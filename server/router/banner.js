const express = require("express");
const bannerModel = require("../models/banner");
const router = express.Router();

router.post("/banner", async (req, res) => {
  try {
    const banner = await new bannerModel(req.body);
    banner.save();
    res.send(banner);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/banner", async (req, res) => {
  try {
    const banner = await bannerModel.find({}).populate("category");
    const bannerLength = banner.length;
    res.set("Content-Range", `banner 0-24/${bannerLength}`).send(banner);
  } catch (e) {
    res.status(500).send("Not found");
  }
});

router.get("/banner/:id", async (req, res) => {
  try {
    const banner = await bannerModel.find({ _id: req.params.id });
    res.send(banner);
  } catch (e) {
    res.status(500).send("Not found");
  }
});

router.put("/banner/:id", async (req, res) => {
  try {
    const update = await bannerModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );

    update.save();
    res.send(update);
  } catch (e) {
    res.send(e);
  }
});

router.delete("/banner/:id", async (req, res) => {
  try {
    const banner = await bannerModel.findByIdAndRemove({
      _id: req.params.id,
    });
    banner.save();
    res.send(banner);
  } catch (e) {
    res.status(404).send("Not found");
  }
});

module.exports = router;
