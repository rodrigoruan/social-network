const Joi = require('joi');

const schemaCreatePost = Joi.object({
  content: Joi.string().required(),
  image: Joi.string().allow(null),
});

module.exports = {
  schemaCreatePost,
};
