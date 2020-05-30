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
    if (req.query.filter) {
      const fil = JSON.parse(req.query.filter);

      const ids = await fil["id"].map((i) => i._id);
      const result = await bannerModel.find({
        _id: { $in: ids },
      });
      return res.send(result);
    }
    if (req.query.preview) {
      return await bannerModel
        .find({}, "image")
        .populate({ path: "category", select: "title label" })
        .exec((err, preview) => {
          if (err) res.status(500).send(err);
          res.send(preview);
        });
    }
    let banner = await bannerModel.find({});
    const bannerLength = banner.length;
    res.set("Content-Range", `banner 0-24/${bannerLength}`).send(banner);
  } catch (e) {
    res.status(500).send("Not found");
  }
});

router.get("/banner/:id", async (req, res) => {
  try {
    const banner = await bannerModel.findById(req.params.id);
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
