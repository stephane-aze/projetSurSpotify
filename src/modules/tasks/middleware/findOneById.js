const findOneById = require('../services/findOneById.js');

module.exports = (req, res) => {
  const { listId, taskId } = req.params;
  findOneById(listId, taskId).then((list) => {
    res.json(list);
  })
    .catch((err) => {
      res.status(err.status).json(err);
    });
};
