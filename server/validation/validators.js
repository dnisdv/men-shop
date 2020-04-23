const userSchema = require("./userSchema");
const reviewSchema = require("./reviewSchema");
const productSchema = require("./productSchema");

const signupValidator = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

const reviewValidator = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

const productValidator = (req, res, next) => {
  const { error } = productSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error });
  next();
};

exports.signupValidator = signupValidator;
exports.reviewValidator = reviewValidator;
exports.productValidator = productValidator;
