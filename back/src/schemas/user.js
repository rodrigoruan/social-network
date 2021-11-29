const Joi = require('joi');

const schemaCreateUser = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required(),
  password: Joi.string().min(6).max(20).required(),
});

const schemaLoginUser = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required(),
  password: Joi.string().min(6).required(),
});

module.exports = {
  schemaCreateUser,
  schemaLoginUser,
};
