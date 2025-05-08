const Joi = require('joi');
const mongoose = require('mongoose');

const IdDto = Joi.object({
    id: Joi.string()
        .custom((value, helpers) => {
            if (!mongoose.Types.ObjectId.isValid(value)) {
                return helpers.message(`Invalid MongoDB ObjectId`);
            }
            return value;
        })
        .required(),
});

module.exports = {
    IdDto,
};
