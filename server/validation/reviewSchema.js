const Joi = require("@hapi/joi");

module.exports = Joi.object({
  description: Joi.string().max(120).messages({
    "string.empty": "Please enter description",
    "string.base": "Invalid type, description must be a string",
    "string.min": "description must have min 3 character lenght",
    "string.max": "description must have max 120 charachter lenght",
  }),

  rate: Joi.number().min(0).max(5).required().positive().allow(0).messages({}),
});
