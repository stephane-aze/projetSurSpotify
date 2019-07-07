const { Router } = require('express');
const createOne = require('./middleware/createOne.js');
const find = require('./middleware/find.js');
const findOneById = require('./middleware/findOneById');
const updateById = require('./middleware/updateById');
// const deleteById = require('./middleware/deleteById');


const router = new Router();

router.use((req, res, next) => {
  res.set('Content-Type', 'application/json');
  next();
});

router.route('/lists/:listId/tasks')
  .post(createOne)
  .get(find);
router.route('/lists/:listId/tasks/:taskId')
  .get(findOneById)
  .patch(findOneById, updateById);
// .delete(deleteById);


module.exports = router;
