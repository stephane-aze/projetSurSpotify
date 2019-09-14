const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const favorisfindOneById = require('../../favoris/services/findOneById');
const { creationModel } = require('../model.js');


module.exports = (albumToCreate, favorisId) => {
  const album = {
    ...albumToCreate, // recupere tous les keys de l'objet album
    favorisId, // listid a le meme nom
    checked: false,
  };
  // 1 valider le model
  // 2 insrer le document
  return creationModel.validate(album)
    .then(() => favorisfindOneById(favorisId))
    .then(() => connect())
    .then(db => db.collection(collections.ALBUMS))
    .then(collection => collection.insertOne(album))
    .then(dbResponse => dbResponse.ops[0]);
};
