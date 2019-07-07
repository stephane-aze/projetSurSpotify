const find = require('../services/find');

module.exports = (req, res, next) => {
  const { listId } = req.params;

  find(listId).then((bdd) => {
    res.json(bdd);
  })
    .catch((err) => {
      next(err);
    });
};
