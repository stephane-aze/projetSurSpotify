const createOne = require('../services/createOne');


module.exports = (req, res, next) => {
  // console.log(req);
  const TaskToCreate = req.body;
  const { listId } = req.params;
  createOne(TaskToCreate, listId)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      next(err);
    });
};
