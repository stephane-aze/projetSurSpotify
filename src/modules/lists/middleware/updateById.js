const updateOneById = require('../services/updateById');

module.exports = (req, res) => {
  const { listId } = req.params;
  const listToUpdate = req.params;
  updateOneById(listId, listToUpdate)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      res.status(err.status).json(err);
    });
};
