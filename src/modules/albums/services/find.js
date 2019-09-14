const connect = require('../../../clients/mongodb.js');
const collections = require('../../../enums/collections.js');

module.exports = (favorisId) => {
  return connect()
    .then(db => db.collection(collections.ALBUMS))
    .then(collection => collection.find({ favorisId }).toArray());
};
