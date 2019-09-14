// const bdd = require('../../../bdd');
const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const findOneById = require('./findOneById');

module.exports = (id, favorisToUpdate) => {
  return connect()
    .then(db => db.collection(collections.FAVORIS))
    .then(collection => collection.updateOne({ _id: ObjectId(id) }, { $set: favorisToUpdate }))
    .then((dbResponse) => {
      if (dbResponse.matchedCount === 1) {
        return findOneById(id);
      }
      const err = new Error('Not Found');
      err.status = 404;
      throw err;
    });
};
