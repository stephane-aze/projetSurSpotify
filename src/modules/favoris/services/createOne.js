const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const model = require('../model.js');


module.exports = (favorisToCreate) => {
  // 1 valider le model
  // 2 insrer le document
  return model.validate(favorisToCreate)
    .then(connect)
    .then(db => db.collection(collections.FAVORIS))
    .then(collection => collection.insertOne(favorisToCreate))
    .then(dbResponse => dbResponse.ops[0]);
};
