module.exports = (req, res) => {
  const { url } = req;
  res.status(404).json({
    message: `Not Found  for ${url}`,
    status: 404,
  });
};
