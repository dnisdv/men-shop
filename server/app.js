const express = require("express");
const userRouter = require("./router/user");
const productRouter = require("./router/product");
const reviewRouter = require("./router/review");
const adminRoute = require("./router/admin");
const categoryRouter = require("./router/category");
const cartRoute = require("./router/cart");
const orderRouter = require("./router/order");
const bannerRoute = require("./router/banner");
const shippingRoute = require("./router/shippingMethod");
const orderStatus = require("./router/orderStatus");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

require("./db/db.js");

const corsOptions = {
  origin: true,
  allowedHeaders: ["content-range", "content-type"],
  exposedHeaders: ["content-range", "content-type"],
  credentials: true,
};

const app = express();

app.use(
  session({
    name: process.env.SESS_NAME,
    secret: process.env.SESS_SECRET,
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      collection: "session",
      ttl: parseInt(1000 * 60 * 60 * 2) / 1000,
    }),
    cookie: {
      // sameSite: true,
      // secure: process.env.NODE_ENV === "production",
      maxAge: parseInt(1000 * 60 * 60 * 2),
    },
  })
);

app.use(cookieParser());
app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", userRouter);
app.use("/api", productRouter);
app.use("/api", reviewRouter);
app.use("/api", categoryRouter);
app.use("/api", orderRouter);
app.use("/api", bannerRoute);
app.use("/api", adminRoute);
app.use("/api", cartRoute);
app.use("/api", orderStatus);
app.use("/api", shippingRoute);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,"../client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
 