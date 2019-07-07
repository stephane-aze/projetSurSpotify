const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const listfindOneById = require('../../lists/services/findOneById');
const { creationModel } = require('../model.js');


module.exports = (TaskToCreate, listId) => {
  const task = {
    ...TaskToCreate, // recupere tous les keys de l'objet task
    listId, // listid a le meme nom
    checked: false,
  };
  // 1 valider le model
  // 2 insrer le document
  return creationModel.validate(task)
    .then(() => listfindOneById(listId))
    .then(() => connect())
    .then(db => db.collection(collections.TASKS))
    .then(collection => collection.insertOne(task))
    .then(dbResponse => dbResponse.ops[0]);
};
