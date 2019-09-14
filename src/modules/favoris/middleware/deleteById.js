const deleteById = require('../services/deleteById');


module.exports = (req, res, next) => {
  const { favorisId } = req.params;

  deleteById(favorisId)
    .then((favoris) => {
      res.json(favoris);
    })
    .catch((err) => {
      next(err);
    });
};
