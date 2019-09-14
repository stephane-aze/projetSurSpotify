const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  email: joi.string().email(),
  password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  admin: joi.boolean().default(false),
  access_token: [joi.string(), joi.number()],
}).with('name', 'firstname').without('password', 'access_token');

const updateModel = joi.object().keys({
  email: joi.string().email(),
  password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  admin: joi.boolean().default(false),
  access_token: [joi.string(), joi.number()],
});

module.exports = {
  createModel,
  updateModel,
};
