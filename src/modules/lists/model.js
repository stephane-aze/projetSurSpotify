const Joi = require('@hapi/joi');

const schema = Joi.object().keys({
  name: Joi.string().required(),
  description: Joi.string().required(),
});
module.exports = schema;
