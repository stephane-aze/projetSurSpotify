/* eslint-disable no-console */


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const apiRouter = require('./services/api');

const notFound = require('./middleware/notFound');
const errors = require('./middleware/error');

const server = express();
// Middleware Généraux
server.use(cors); // pour ajouter l'url à notre api
server.use(helmet); // pour ajouter l'header à notre api
server.use(bodyParser.json());
// Middleware fonctionnels
server.use(apiRouter);

// Middleware last one
server.use(notFound);

// Middleware d'erreur
server.use(errors);

server.listen(3000, () => {
  console.log('Server started at port 3000');
});
