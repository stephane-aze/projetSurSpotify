const updateOneById = require('../services/updateById.js');

module.exports = (req, res) => {
  const { listId, taskId, listToUpdate } = req.params;
  updateOneById(listId, taskId, listToUpdate)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      res.status(err.status).json(err);
    });
};
