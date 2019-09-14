// const bdd = require('../../../bdd');
const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const findOneById = require('./findOneById');
const { updateModel } = require('../model.js');


module.exports = (favorisId, id, albumToUpdate) => {
  return updateModel.validate(albumToUpdate)
    .then(connect)
    .then(db => db.collection(collections.ALBUMS))
    .then(collection => collection.updateOne({ _id: ObjectId(id) }, { $set: albumToUpdate }))
    .then((dbResponse) => {
      if (dbResponse.matchedCount === 1) {
        return findOneById(id);
      }
      const err = new Error('Not Found');
      err.status = 404;
      throw err;
    });
};
