const findList = require('../services/findList');

module.exports = (req, res, next) => {
  const {
    first,
    offset,
  } = req.query;
  let firstInt;
  let offsetInt;

  if (first || first === '') firstInt = parseInt(first, 10);
  if (offset || offset === '') offsetInt = parseInt(offset, 10);
  findList(firstInt, offsetInt).then((bdd) => {
    res.json(bdd);
  })
    .catch((err) => {
      next(err);
    });
};
