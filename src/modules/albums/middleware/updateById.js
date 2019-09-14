const updateOneById = require('../services/updateById.js');

module.exports = (req, res) => {
  const { favorisId, albumId, favorisToUpdate } = req.params;
  updateOneById(favorisId, albumId, favorisToUpdate)
    .then((favoris) => {
      res.json(favoris);
    })
    .catch((err) => {
      res.status(err.status).json(err);
    });
};
