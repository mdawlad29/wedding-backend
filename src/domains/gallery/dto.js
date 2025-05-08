const Joi = require("joi");

const createGalleryDto = Joi.object({
  images: Joi.array().required(),
});

module.exports = { createGalleryDto };
