const mongoose = require("mongoose");
require("dotenv").config();
console.log(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}`);
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-cdae8.mongodb.net/men-shop?retryWrites=true&w=majority`,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("db is connected"))
  .catch((e) => console.log(e));
