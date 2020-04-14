const express = require('express')
require('dotenv').config({ path: './config/.env' })
const userRouter = require('./router/user')
const session = require('express-session')
const bodyParser = require('body-parser')
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000

require('./db/db.js')


const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(session({
    name: process.env.SESS_NAME,
    secret: process.env.SESS_SECRET,
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      collection: 'session',
      ttl: parseInt(process.env.SESS_LIFETIME) / 1000
    }),
    cookie: {
      sameSite: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: parseInt(process.env.SESS_LIFETIME)
    }
  }));

app.use('/api/user/',userRouter);

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`))