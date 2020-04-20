const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    title: {
        type:String,
        require: true
    },
    description: {
        type:String,
        required:true
    },
    rate: {
        type:Number,
        default:0
    },
    likes: {
        type:Number,
        default: 0
    },
    dislikes: {
        type:Number,
        default: 0
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }

})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review