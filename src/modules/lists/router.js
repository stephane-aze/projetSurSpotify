const { Router } = require('express');
// const validate = require('./model');
const findOneById = require('./middleware/findOneById');
const updateById = require('./middleware/updateById');
const findList = require('./middleware/findList');
const createOne = require('./middleware/createOne');
const deleteById = require('./middleware/deleteById');

const router = new Router();

router.use((req, res, next) => {
  res.set('Content-Type', 'application/json');
  next();
});

router.route('/lists')
  .get(findList)
  .post(createOne);


router.route('/lists/:listId')
  .get(findOneById)
  .patch(findOneById, updateById)
  .delete(deleteById);

module.exports = router;
