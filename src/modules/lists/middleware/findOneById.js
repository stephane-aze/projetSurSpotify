const findOneById = require('../services/findOneById');

module.exports = (req, res) => {
  const { listId } = req.params;
  findOneById(listId).then((list) => {
    res.json(list);
  })
    .catch((err) => {
      res.status(err.status).json(err);
    });
};
