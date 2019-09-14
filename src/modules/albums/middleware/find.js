const find = require('../services/find');

module.exports = (req, res, next) => {
  const { favorisId } = req.params;

  find(favorisId).then((bdd) => {
    res.json(bdd);
  })
    .catch((err) => {
      next(err);
    });
};
