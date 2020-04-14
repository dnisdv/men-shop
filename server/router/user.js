const express = require('express')
const userModel = require('../models/user')
const router = express.Router()
const signupValidator = require('../validation/validators')

router.post('/register', signupValidator, async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = new userModel({ username, email, password });
        await newUser.save();
        res.send(newUser);
    } catch (e) {
        console.log(e)
        res.send(e)
    }
})

router.post('/login', (req, res) => {
    const {email, password } = req.body;
    try {
        userModel.findByCredentials(email, password, (err , user) => {
            if(err) {
                return res.send(err)
            }
            req.session.user = user._id
            res.send(user)
        })
        
    } catch (error) {
        res.status(400).send(error)
    }

})


router.post('/logout', async (req, res) => {
    
    try {
        res.send('hell')
    } catch (e) {
        res.status(500).send()
    }
})



module.exports = router