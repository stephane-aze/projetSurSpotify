const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');


module.exports = (id) => {
  // 1 valider le model
  // 2 insrer le document
  return connect()
    .then(db => db.collection(collections.FAVORIS))
    .then(collection => collection.deleteOne({ _id: ObjectId(id) }))
    .then((dbResponse) => {
      if (dbResponse.deletedCount === 1) {
        return {
          status: 'ok',
          deletedItems: id,
        };
      }
      const err = new Error('Not Found');
      err.status = 404;
      throw err;
    });
};
