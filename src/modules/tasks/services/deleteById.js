const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');


module.exports = (listId, id) => {
  // 1 valider le model
  // 2 insrer le document
  return connect()
    .then(db => db.collection(collections.LISTS))
    .then(collection => collection.deleteOne({
      _id: ObjectId(id),
      listId,
    }))
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
