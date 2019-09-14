const updateOneById = require('../services/updateById');

module.exports = (req, res) => {
  const { favorisId } = req.params;
  const favorisToUpdate = req.params;
  updateOneById(favorisId, favorisToUpdate)
    .then((favoris) => {
      res.json(favoris);
    })
    .catch((err) => {
      res.status(err.status).json(err);
    });
};
