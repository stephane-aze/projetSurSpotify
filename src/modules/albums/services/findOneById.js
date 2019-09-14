// const bdd = require('../../../bdd');
const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (favorisId, id) => {
  return connect()
    .then(db => db.collection(collections.ALBUMS))
    .then(collection => collection.findOne({
      _id: ObjectId(id),
      favorisId,
    }))
    .then((dbResponse) => {
      if (dbResponse) {
        return dbResponse;
      }
      const err = new Error('List Not Found $id');
      err.name = 'Not Found';
      err.status = 404;
      throw err;
    });
};
