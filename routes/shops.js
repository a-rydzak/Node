const path = require('path');
const express = require('express');

const router = express.Router();

const rootDir = require('../helpers/path');

const { products } = require('../controllers/product-controller');

// middleware on these routes only
router.all('/', (req, res, next) => {
  // console.log('Middleware Happening');
  // next();
  res.redirect('/home');
});

// router.get('/home', (req, res) => {
//   res.send('Home!!', 200);
// });

// router.get('/', (req, res, next) => {
//   res.status(200).send('You Have Landed');
// });

router.get('/home', (req, res) => {
  res.status(200).render('pug/shop', { prods: products });
  // res.sendFile(path.join(rootDir, 'views', 'shop.pug'));  This will actually send a file itself
});

module.exports = router;
