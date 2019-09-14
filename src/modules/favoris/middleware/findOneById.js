const findOneById = require('../services/findOneById');

module.exports = (req, res) => {
  const { favorisId } = req.params;
  findOneById(favorisId).then((favoris) => {
    res.json(favoris);
  })
    .catch((err) => {
      res.status(err.status).json(err);
    });
};
