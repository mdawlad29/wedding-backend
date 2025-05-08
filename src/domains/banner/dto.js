const Joi = require("joi");

const createBannerDto = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  banner_images: Joi.array().optional(),
});

module.exports = { createBannerDto };
