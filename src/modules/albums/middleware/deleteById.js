const deleteById = require('../services/deleteById');


module.exports = (req, res, next) => {
  const { favorisId, albumId } = req.params;

  deleteById(favorisId, albumId)
    .then((favoris) => {
      res.json(favoris);
    })
    .catch((err) => {
      next(err);
    });
};
