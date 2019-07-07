// const bdd = require('../../../bdd');
const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const findOneById = require('./findOneById');
const { updateModel } = require('../model.js');


module.exports = (listeId, id, taskToUpdate) => {
  return updateModel.validate(taskToUpdate)
    .then(connect)
    .then(db => db.collection(collections.TASKS))
    .then(collection => collection.updateOne({ _id: ObjectId(id) }, { $set: taskToUpdate }))
    .then((dbResponse) => {
      if (dbResponse.matchedCount === 1) {
        return findOneById(id);
      }
      const err = new Error('Not Found');
      err.status = 404;
      throw err;
    });
};
