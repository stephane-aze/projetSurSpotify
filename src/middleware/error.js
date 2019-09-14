const errtoJson = require('error-to-json');

function badRequest(err, req, res, next) {
  if (err.isJoi) {
    const error = new Error('Bad Request');
    error.status = 400;
    next(error);
  }
  next(err);
}
// (Désactivé erreur eslint sur les variables)
// eslint-disable-next-line
function sendError(err, req, res, next) {
  res.status(err.status || 500).json(errtoJson(err));
}
module.exports = [
  badRequest,
  sendError,
];
