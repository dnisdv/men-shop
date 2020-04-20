const express = require('express')
const productModel = require('../models/product')
const reviewModel = require('../models/review')
const validator = require('../validation/validators')
const router = express.Router()

router.post('/new', validator.productValidator, async (req, res) => {
    try {
        const product = await productModel(req.body)
        // product.save()

        res.send(product)
    } catch (e) {
        res.send(e)
    }
})

router.get('/find/:id', async (req, res) => {

    try {
        const product = await productModel.findById(req.params.id)
        res.send(product)
    } catch (e) {
        res.status(400).send(e)
    }

})

router.delete('/removebyid/:id', async (req, res) => {
    try {
        const product = await productModel.findOneAndDelete(req.params.id)
        await reviewModel.deleteMany({product : req.params.id})
        if (!product) {
            return res.status(404).send('Product not found')
        }
        res.send(product)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/remove/all', async (req, res) => {
    try {
        await reviewModel.deleteMany({})
        const product = await productModel.deleteMany({})
        res.send('removed')
    } catch (e) {
        res.status(400).send(e)
    }
})


router.get('/all', async (req, res) => {
    try {
        const products = await productModel.find({})
        res.send(products)
    } catch (e) {
        res.status(400).send()
    }
})

router.get('/category/:value', async (req, res) => {
    try {
        const product = await productModel.find({
            category: req.params.value
        })
        if (!product) {
            res.status(404).send('not found')
        }
        res.send(product)
    } catch (e) {
        res.status(400).send()
    }
})


module.exports = router