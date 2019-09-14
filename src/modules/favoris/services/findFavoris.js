const connect = require('../../../clients/mongodb.js');
const collections = require('../../../enums/collections.js');

module.exports = () => {
  return connect()
    .then(db => db.collection(collections.FAVORIS))
    .then(collection => collection.find().toArray());
};
