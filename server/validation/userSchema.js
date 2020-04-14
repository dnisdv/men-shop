const Joi = require('@hapi/joi')

module.exports = Joi.object({
    
    email : Joi.string()
    .email({ minDomainSegments: 2,})
    .required()
    .messages({
      'string.empty' : 'Please enter email',
      'string.base' : 'Invalid type, email must be a string'
    }),
    
    username : Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .messages({
        'string.empty' : 'Please enter username',
        'string.base' : 'Invalid type, username must be a string',
        'string.min' : 'Username must have min 3 character lenght',
        'string.max' : 'Username must have max 30 charachter lenght'
      }),
      
    password : Joi.string()
    .pattern(new RegExp('^[a-zа-яA-ZА-Я0-9!@#$%&*]{3,16}$'))
    .min(3) 
    .max(16)
    .required()
    .messages({
      'string.pattern.base': 'Password must have min 3 character and 16 character max',
      'string.empy' : 'Please enter password'
    }),
    
    repeat_password: Joi.ref('password'),
    
})

