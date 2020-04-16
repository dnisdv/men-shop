const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    category:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    quick_description : {
        type: String,
        required:true,  
    },
    description: {
        type: String,
        required: true,
        lowercase: true,
    },
    characteristics: [{
        title: {
            type:String,
        },
        value: {
            type:String
        }
    }],
    rate: {
        type: Number,
        required: true,
    },
    stock: [{
        title: { 
            type: String
        },
        qnt: {
            type:Number,
            required: true
        }        
    }],
    price: {
        type: Number,
        required: true,
    },
    shipping_price: {
        type: Number,
        required: true,
    },
    images : [{
        url:{
            type: String
        }
    }],
    created_at : {
         type: Date, 
    },
    updated_at: {
        type: Date, 
        default: Date.now,
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product