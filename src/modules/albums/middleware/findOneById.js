const findOneById = require('../services/findOneById.js');

module.exports = (req, res) => {
  const { favorisId, albumId } = req.params;
  findOneById(favorisId, albumId).then((favoris) => {
    res.json(favoris);
  })
    .catch((err) => {
      res.status(err.status).json(err);
    });
};
