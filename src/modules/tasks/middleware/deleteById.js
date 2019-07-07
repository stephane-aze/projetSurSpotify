const deleteById = require('../services/deleteById');


module.exports = (req, res, next) => {
  const { listId, taskId } = req.params;

  deleteById(listId, taskId)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      next(err);
    });
};
