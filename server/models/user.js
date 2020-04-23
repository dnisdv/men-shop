const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    trim: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

userSchema.statics.findByCredentials = async (email, password, cb) => {
  const user = await User.findOne({
    email,
  });

  if (!user) {
    return cb(
      {
        msg: "User not found",
      },
      null
    );
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return cb(
      {
        msg: "Password is not correct",
      },
      null
    );
  }

  return cb(null, user);
};

userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
