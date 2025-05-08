const Joi = require("joi");

const createAboutDto = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

module.exports = { createAboutDto };
