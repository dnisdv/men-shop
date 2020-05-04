const express = require("express");
const userModel = require("../models/user");
const reviewModel = require("../models/review");
const router = express.Router();
// const validator = require("../validation/validators");

router.post("/users/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exist
    const existEmail = await userModel.exists({ email: email });
    const existUsername = await userModel.exists({ username: username });
    if (existEmail)
      return res.status(404).send({ error: "Email already exist" });
    if (existUsername)
      return res.status(404).send({ error: "Username already exist" });

    const newUser = new userModel({ username, email, password });
    await newUser.save();
    res.send(newUser);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/users/login", (req, res) => {
  const { email, password } = req.body;
  try {
    const UserData = userModel.findByCredentials(email, password, (err) => {
      if (err) {
        return res.status(404).send(err);
      }

      req.session.id = UserData._id;

      res.send(UserData._id);
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/users/logout", async (req, res) => {
  try {
    res.send("hell");
  } catch (e) {
    res.status(500).send();
  }
});

router.delete("/users/:id", async (req, res) => {
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

router.post("/users", async (req, res) => {
  try {
    const user = await new userModel(req.body);
    user.save();
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await userModel.find({});
    if (!users) return res.send("no users found");
    const usersLength = users.length;
    res.set("Content-Range", `products 0-24/${usersLength}`).send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const user = await userModel.findById({ _id: req.params.id });
    if (!user) return res.send("User not found");
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.put("/users/:id", async (req, res) => {
  try {
    const update = await userModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    await update.save();

    res.send(update);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/users/checkusername", async (req, res) => {
  console.log(req.body);
  try {
    const existUsername = await userModel.exists({
      username: req.body.username,
    });
    res.send(existUsername);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
