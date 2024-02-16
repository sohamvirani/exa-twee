const Joi = require("joi");

const adduser = {
  body: Joi.object().keys({
    userName: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    createdAt:Joi.string().required().trim(),
    role: Joi.string().required().trim(),
  }),
};
module.exports = {
    adduser,
};
