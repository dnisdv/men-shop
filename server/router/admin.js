const express = require("express");
const router = express.Router();

const adminCredentials = {
  _id: 1,
  username: "demo",
  password: "demo",
  role: "admin",
};

router.post("/admin", (req, res) => {
  try {
    if (
      adminCredentials.username != req.body.username &&
      adminCredentials.password != req.body.password
    )
      res.status(401).send();

    req.session.adminId = {
      id: adminCredentials._id,
      role: adminCredentials.role,
    };
    res.send("success");
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/admin", (req, res) => {
  try {
    if (
      req.session &&
      req.session.adminId &&
      req.session.adminId.role === "admin"
    ) {
      return res.send("success");
    } else {
      return res.status(401).send();
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/admin", (req, res) => {
  try {
    const admin = req.session.adminId;
    if (admin) {
      return req.session.destroy((err) => {
        if (err) res.status(500).send();
        res.clearCookie(process.env.SESS_NAME);
        res.send(admin);
      });
    } else {
      return res.status(400).send();
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
