const express = require("express");
const userModel = require("../models/user");
const reviewModel = require("../models/review");
const router = express.Router();
const { SESS_NAME } = require("../config");

router.post("/users/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
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
    userModel.findByCredentials(email, password, (err, data) => {
      if (err) {
        return res.status(404).send(err);
      }

      req.session.userId = data._id;

      res.send({ username: data.username, email: data.email, _id: data._id });
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/users/logout", async (req, res) => {
  try {
    const user = req.session.userId;
    if (user) {
      return req.session.destroy((err) => {
        if (err) res.status(500).send();
        res.clearCookie(SESS_NAME);
        res.send(user);
      });
    } else {
      return res.status(400).send();
    }
  } catch (err) {
    res.status(500).send(err);
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
    if (req.query.filter) {
      const fil = JSON.parse(req.query.filter);

      const result = await userModel.find({
        _id: { $in: fil["id"] },
      });
      return res.send(result);
    }

    if (req.query.range) {
      const [from = 0, to = 4] = JSON.parse(req.query.range);

      const users = await userModel
        .find({})
        .limit(from - to - 1)
        .skip(from);

      const userLenght = await userModel.find({});
      const length = userLenght.length;

      return res
        .set("Content-Range", `products ${+from}-${+to}/${length}`)
        .send(users);
    }

    const users = await userModel.find({});
    if (!users) return res.send("no users found");
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
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
  try {
    const existUsername = await userModel.exists({
      username: req.body.username,
    });
    res.send(existUsername);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/checkuserauth", async (req, res) => {
  try {
    if (req.session && req.session.userId) {
      const user = await userModel.findById(req.session.userId);
      return res.send({
        username: user.username,
        email: user.email,
        _id: user._id,
      });
    } else {
      return res.status(401).send([]);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
