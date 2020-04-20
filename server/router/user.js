const express = require("express");
const userModel = require("../models/user");
const reviewModel = require("../models/review");
const router = express.Router();
const validator = require("../validation/validators");

router.post("/register", validator.signupValidator, async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = new userModel({ username, email, password });
    await newUser.save();
    res.send(newUser);
  } catch (e) {
    res.send(e);
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  try {
    userModel.findByCredentials(email, password, (err, user) => {
      if (err) {
        return res.send(err);
      }
      req.session.user = user._id;
      res.send(user);
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/logout", async (req, res) => {
  try {
    res.send("hell");
  } catch (e) {
    res.status(500).send();
  }
});

router.delete("/remove/:id", async (req, res) => {
  try {
    await reviewModel.deleteMany({ user: "5e9854057176db24db2ed4e5" });
    const user = await userModel.findOneAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
