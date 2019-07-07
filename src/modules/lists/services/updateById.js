// const bdd = require('../../../bdd');
const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const findOneById = require('./findOneById');

module.exports = (id, ListeToUpdate) => {
  return connect()
    .then(db => db.collection(collections.LISTS))
    .then(collection => collection.updateOne({ _id: ObjectId(id) }, { $set: ListeToUpdate }))
    .then((dbResponse) => {
      if (dbResponse.matchedCount === 1) {
        return findOneById(id);
      }
      const err = new Error('Not Found');
      err.status = 404;
      throw err;
    });
};
