const path = require('path');
const express = require('express');

const router = express.Router();

const rootDir = require('../helpers/path');

const products = [];

router.use('/', (req, res, next) => {
  console.log('Middleware Happening');
  next();
});

//  @route      GET /admin/add-product
//  @desc       GET Admin Product Page
//  @expect     RETURN Admin Product Page
//  @access     Admin
router.get('/add-product', (req, res, next) => {
  res.render('pug/add-product');
  // res.status(200).sendFile(path.join(rootDir, 'views', '/pug/add-product.pug'));
});

//  @route      POST /admin/add-product
//  @desc       POST create a new porducr
//  @expect     RETURN redirect to home
//  @access     Admin
router.post('/add-product', (req, res) => {
  console.log(req.body.title);
  products.push({
    title: req.body.title,
    price: req.body.price,
    desc: req.body.desc
  });
  res.redirect('/home');
});

// module.exports = router;
module.exports = { router, products };
