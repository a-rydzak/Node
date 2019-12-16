const { products } = require('./product-controller');

const getHome = (req, res) => {
  res.status(200).render('pug/shop', { prods: products });
  // res.sendFile(path.join(rootDir, 'views', 'shop.pug'));  This will actually send a file itself
};

const redirHome = (req, res, next) => {
  // console.log('Middleware Happening');
  // next();
  res.redirect('/home');
};
module.exports = { getHome, redirHome };
