const Joi = require("@hapi/joi");

module.exports = Joi.object({
  category: Joi.string().required().max(50).min(3).messages({
    "string.empty": "Please enter title",
    "string.base": "Invalid type, title must be a string",
  }),
  title: Joi.string().required().min(5).max(120),

  description: Joi.string().min(3).max(250).messages({
    "string.empty": "Please enter description",
    "string.base": "Invalid type, description must be a string",
    "string.min": "description must have min 3 character lenght",
    "string.max": "description must have max 120 charachter lenght",
  }),

  quick_description: Joi.string().min(3).max(170),

  images: Joi.array(),

  stock: Joi.array().items(
    Joi.object({
      title: Joi.string().min(1).max(50).messages({
        "string.min": "stock must have min 1 character lenght",
        "string.max": "stock must have max 50 charachter lenght",
      }),

      qnt: Joi.number().positive().allow(0),
    })
  ),

  characteristics: Joi.array().items(
    Joi.object({
      title: Joi.string().min(3).max(80).messages({
        "string.min": "title must have min 3 character lenght",
        "string.max": "title must have max 80 charachter lenght",
      }),

      value: Joi.string().min(3).max(80).messages({
        "string.min": "value must have min 3 character lenght",
        "string.max": "value must have max 80 charachter lenght",
      }),
    })
  ),

  price: Joi.number().positive().allow(0),

  shipping_price: Joi.number().positive().allow(0),

  created_at: Joi.date(),
  updated_at: Joi.date(),

  rate: Joi.number().min(0).max(5).required().positive().allow(0).messages({}),
});
