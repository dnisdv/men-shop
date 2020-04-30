const mongoose = require("mongoose");
const { DB_PASS, DB_USER } = require("../config");

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0-cdae8.mongodb.net/men-shop?retryWrites=true&w=majority`,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("db is connected"))
  .catch((e) => console.log(e));
