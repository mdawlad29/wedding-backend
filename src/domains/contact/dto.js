const Joi = require("joi");

const createContactDto = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  subject: Joi.string().required(),
  message: Joi.string().required(),
});

module.exports = { createContactDto };
