const Joi = require('@hapi/joi');

const creationModel = Joi.object().keys({
  name: Joi.string().required(),
  listId: Joi.string().required(),
  checked: Joi.boolean().required(),
});
const updateModel = Joi.object().keys({
  name: Joi.string(),
  listId: Joi.string(),
  checked: Joi.boolean(),
});
module.exports = {
  creationModel,
  updateModel,
};
