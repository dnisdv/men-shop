const userSchema = require("./userSchema");
const reviewSchema = require("./reviewSchema");

const signupValidator = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });
  next();
};

const reviewValidator = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};
exports.signupValidator = signupValidator;
exports.reviewValidator = reviewValidator;
