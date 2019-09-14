const createOne = require('../services/createOne');


module.exports = (req, res, next) => {
  // console.log(req);
  const albumToCreate = req.body;
  const { favorisId } = req.params;
  createOne(albumToCreate, favorisId)
    .then((favoris) => {
      res.json(favoris);
    })
    .catch((err) => {
      next(err);
    });
};
