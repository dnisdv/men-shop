const Joi = require("@hapi/joi");

module.exports = Joi.object({
  title: Joi.string().required().min(3).max(250),

  description: Joi.string().min(3).messages({
    "string.empty": "Please enter description",
    "string.base": "Invalid type, description must be a string",
    "string.min": "description must have min 3 character lenght",
    "string.max": "description must have max 850 charachter lenght",
  }),

  quick_description: Joi.string().min(3).max(500),

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
      title: Joi.string().max(120).messages({
        "string.max": "title must have max 120 charachter lenght",
      }),

      value: Joi.string().min(3).max(120).messages({
        "string.min": "value must have min 3 character lenght",
        "string.max": "value must have max 120 charachter lenght",
      }),
    })
  ),

  price: Joi.number().positive().allow(0),

  shipping_price: Joi.number().positive().allow(0),

  created_at: Joi.date(),
  updated_at: Joi.date(),

  rate: Joi.number().min(0).max(5).required().positive().allow(0).messages({}),
});
