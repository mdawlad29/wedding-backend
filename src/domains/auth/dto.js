const Joi = require("joi");

const createAuthDto = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const loginDto = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const changePasswordDto = Joi.object({
  oldPassword: Joi.string().required(),
  newPassword: Joi.string().required(),
});

module.exports = { createAuthDto, loginDto, changePasswordDto };
