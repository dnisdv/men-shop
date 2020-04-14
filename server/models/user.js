const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
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
        required: true,
        minlength: 7,
        trim: true,
    },
    age: {
        type: Number,
        default: 0,
    }
})



userSchema.statics.findByCredentials = async (email, password, cb) => {
    const user = await User.findOne({
        email
    })

    if (!user) {
        return cb({
            msg: 'User not found'
        }, null)
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        return cb({
            msg: 'Password is not correct'
        }, null)
    }

    return cb(null, user)
}


userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User