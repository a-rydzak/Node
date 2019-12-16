const get404 = (req, res, next) => {
  res.status(404).render('pug/not-found');
};

module.exports = { get404 };
