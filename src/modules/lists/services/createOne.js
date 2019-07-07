const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const model = require('../model.js');


module.exports = (ListeToCreate) => {
  // 1 valider le model
  // 2 insrer le document
  return model.validate(ListeToCreate)
    .then(connect)
    .then(db => db.collection(collections.LISTS))
    .then(collection => collection.insertOne(ListeToCreate))
    .then(dbResponse => dbResponse.ops[0]);
};
