
const { Router } = require('express');
const listsRouter = require('../modules/lists/router');
const tasksRouter = require('../modules/tasks/router');

const router = new Router();

router.use('/api', listsRouter);
router.use('/api', tasksRouter);
module.exports = router;
