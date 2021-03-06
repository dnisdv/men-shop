const express = require("express");
const reviewModel = require("../models//review");
const router = express.Router();

router.post("/reviews", async (req, res) => {
  try {
    if (!req.body.user) {
      const review = await new reviewModel({
        ...req.body,
        user: req.session.userId,
      });
      await review.save();
      return res.send(review);
    }
    const review = await new reviewModel({
      ...req.body,
    });
    await review.save();
    res.send(review);
  } catch (e) {
    res.send(e);
  }
});

router.get("/reviews", async (req, res) => {
  try {
    if (req.query.filter) {
      const fil = JSON.parse(req.query.filter);

      const ids = await fil["id"].map((i) => i._id);
      const result = await reviewModel.find({
        _id: { $in: ids },
      });
      return res.send(result);
    }
    if (req.query.range) {
      const [from = 0, to = 4] = JSON.parse(req.query.range);

      const reviews = await reviewModel
        .find({})
        .limit(from - to - 1)
        .skip(from);

      const realreviews = reviews.map((i) => {
        return { ...i._doc, likes: i._doc.likes.length };
      });

      const productsLenght = await reviewModel.find({});
      const length = productsLenght.length;

      return res
        .set("Content-Range", `products ${+from}-${+to}/${length}`)
        .send(realreviews);
    }

    const reviews = await reviewModel.find({});
    const realreviews = reviews.map((i) => {
      return { ...i._doc, likes: i._doc.likes.length };
    });

    res.send(realreviews);
  } catch (e) {
    res.status(404).send();
  }
});

router.get("/reviews/:id", async (req, res) => {
  try {
    const reviews = await reviewModel.findById(req.params.id);
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
  const { page = 0, limit = 3 } = req.query;

  try {
    const reviews = await reviewModel
      .find({ product: req.params.id }, {}, { sort: { created_at: -1 } })
      .populate({ path: "user", select: "username" })
      .limit(limit * 1)
      .skip(page * limit);

    const realreviews = reviews.map((i) => {
      return {
        ...i._doc,
        likes: i._doc.likes.length,
        liked: !req.session.userId
          ? false
          : i._doc.likes
              .map((i) => i.toString() === req.session.userId)
              .includes(true),
      };
    });

    const counts = await reviewModel
      .find({ product: req.params.id })
      .countDocuments();

    if (!reviews) res.send("no reviews");

    res.send({
      reviews: realreviews,
      totalPages: Math.ceil(counts / limit),
      currentPage: +page,
      totalReviews: counts,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.post("/likereview/:reviewId", async (req, res) => {
  try {
    if (!req.session.userId)
      return res.status(400).send({ msg: "authorize to like" });

    const reviews = await reviewModel.findById(req.params.reviewId);
    const isLiked = reviews.likes.includes(req.session.userId);

    if (isLiked) {
      const likes = reviews.likes.filter((i) => {
        return i.toString() !== req.session.userId.toString();
      });
      const updatedReviews = await reviewModel.findOneAndUpdate(
        { _id: req.params.reviewId },
        { likes: likes }
      );
      updatedReviews.save();
      return res.send(updatedReviews);
    }
    const review = await reviewModel.findOneAndUpdate(
      {
        _id: req.params.reviewId,
      },
      { $push: { likes: req.session.userId } }
    );
    review.save();

    res.send(review);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
