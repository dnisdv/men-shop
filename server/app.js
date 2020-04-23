const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const userRouter = require("./router/user");
const productRouter = require("./router/product");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const reviewRouter = require("./router/review");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

require("./db/db.js");

const corsOptions = {
  origin: "http://localhost:3000",
  allowedHeaders: ["content-range", "content-type"],
  exposedHeaders: ["content-range", "content-type"],
};

const app = express();
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    name: process.env.SESS_NAME,
    secret: process.env.SESS_SECRET,
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      collection: "session",
      ttl: parseInt(process.env.SESS_LIFETIME) / 1000,
    }),
    cookie: {
      sameSite: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: parseInt(process.env.SESS_LIFETIME),
    },
  })
);

app.use("/api", userRouter);
app.use("/api", productRouter);
app.use("/api", reviewRouter);

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
