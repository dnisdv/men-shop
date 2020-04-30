const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    age: {
      type: Number,
      default: 0,
    },
    role: {
      type: String,
      default: "user",
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "order",
      },
    ],
    created_at: {
      type: Date,
    },
    updated_at: {
      type: Date,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

userSchema.statics.findByCredentials = async (email, password, cb) => {
  const user = await User.findOne({
    email,
  });

  if (!user) {
    return cb(
      {
        error: "User not found",
      },
      null
    );
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return cb(
      {
        error: "Password is not correct",
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
