const express = require('express')
const userModel = require('../models/user')
const reviewModel = require('../models//review')
const router = express.Router()

router.post('/add/:productId', async (req, res) => {
    const exampleUser = await userModel.findById('5e986e3e223b223f25bd5ac0')
    try{
        const review = await new reviewModel({...req.body, user: exampleUser._id, product:req.params.productId})
        if(!review) return res.status(400).send()
        if(!req.params.productId) return res.status(404).send('target not found')
        await review.save()
        res.send(review)
    }catch(e){
        res.send(e)
    }
})

router.get('/all', async (req, res) => {
    try{
        const reviews = await reviewModel.find({})
        res.send(reviews)
    }catch(e){
        res.status(404).send()
    }
})

router.get('/getbyproduct/:product', async(req, res) => {
    try{
       const reviews = await reviewModel.find({product: req.params.product})
       
       if(!reviews) {
           res.send('not reviews yet')
       }
       res.send(reviews)
    }catch(e){
        res.send(e)
    }
})

router.delete('/remove/:id', async (req, res) => {
    try{
        const review = await reviewModel.findOneAndDelete(req.params.id)
        res.send(review)
    }catch(e){
        res.send(e)
    }
})


module.exports = router