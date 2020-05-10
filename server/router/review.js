const express = require("express");
// const userModel = require("../models/user");
const reviewModel = require("../models//review");
const router = express.Router();

router.post("/reviews", async (req, res) => {
  try {
    const review = await new reviewModel({
      ...req.body,
    });
    if (!review) return res.status(400).send();
    if (!req.body.user || !req.body.product)
      return res.status(404).send("target not found");
    await review.save();
    res.send(review);
  } catch (e) {
    res.send(e);
  }
});

router.get("/reviews", async (req, res) => {
  try {
    const reviews = await reviewModel.find({});
    const reviewsLenght = reviews.length;
    res.set("Content-Range", `reviews 0-24/${reviewsLenght}`).send(reviews);
  } catch (e) {
    res.status(404).send();
  }
});

router.get("/reviews/:id", async (req, res) => {
  try {
    const reviews = await reviewModel.find({ product: req.params.id });

    if (!reviews) {
      res.send("not reviews yet");
    }
    res.send(reviews);
  } catch (e) {
    res.send(e);
  }
});

router.put("/reviews/:id", async (req, res) => {
  try {
    const update = await reviewModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );

    update.save();
    res.send(update);
  } catch (e) {
    res.send(e);
  }
});

router.delete("/reviews/:id", async (req, res) => {
  try {
    const review = await reviewModel.findOneAndDelete(req.params.id);
    res.send(review);
  } catch (e) {
    res.send(e);
  }
});

router.get("/reviews/product/:id", async (req, res) => {
  const { page = 1, limit = 3 } = req.query;

  try {
    const reviews = await reviewModel
      .find({ product: req.params.id })
      .populate({ path: "user", select: "username" })
      .limit(limit * 1)
      .skip(page * limit);

    const count = await reviewModel
      .find({ product: req.params.id })
      .countDocuments();

    if (!reviews) res.send("no reviews");

    res.send({
      reviews,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      totalReviews: count,
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
