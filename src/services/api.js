/* const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; */
const { Router } = require('express');
const favorisRouter = require('../modules/favoris/router');
const albumsRouter = require('../modules/albums/router');

const router = new Router();
// router.use('/login', passport)
router.use('/api', favorisRouter);
router.use('/api', albumsRouter);
module.exports = router;
