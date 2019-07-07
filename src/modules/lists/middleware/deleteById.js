const deleteById = require('../services/deleteById');


module.exports = (req, res, next) => {
  const { listId } = req.params;

  deleteById(listId)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      next(err);
    });
};
