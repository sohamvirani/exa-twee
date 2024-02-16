const joi = require("joi")

const tweet = {
  body: Joi.object.keys({
    content: Joi.string().required().trim(),
    user: Joi.string().required().trim(),
    createdAt: Joi.date().required(),
  }),
};

module.exports = {
  tweet,
};