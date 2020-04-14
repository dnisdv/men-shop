const userSchema = require('./userSchema')

const signupValidator = (req, res, next) => {
    const { error } = userSchema.validate(req.body)
    if(error) return res.status(400).json({error : error.details[0].message})
    next()
}

module.exports = signupValidator