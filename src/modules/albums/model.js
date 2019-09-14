const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  name: joi.string().required(),
  favorisId: joi.string().required(),
  artist: joi.string().required(),
  checked: joi.boolean().required(),
});

const updateModel = joi.object().keys({
  name: joi.string(),
  artist: joi.string().required(),
  checked: joi.boolean(),
});

module.exports = {
  createModel,
  updateModel,
};
