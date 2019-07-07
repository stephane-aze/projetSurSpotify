const connect = require('../../../clients/mongodb.js');
const collections = require('../../../enums/collections.js');

module.exports = (listId) => {
  return connect()
    .then(db => db.collection(collections.TASKS))
    .then(collection => collection.find({ listId }).toArray());
};
