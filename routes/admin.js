const path = require('path');
const rootDir = require('../helpers/path');
const myMiddleware = require('../helpers/middleware');

const express = require('express');
const router = express.Router();
const products = [];

router.use(myMiddleware);
// Use middleware in these routes only example
// router.post('/', (req, res, next) => {
//   console.log('Different Middleware');
//   next();
// });

/*
  @route      GET /admin/add-product
  @desc       GET Admin Product Page
  @expect     RETURN Admin Product Page
  @access     Admin
*/
router.get('/add-product', (req, res, next) => {
  res.render('pug/add-product');
  // Path was needed for returning a static file ex - download a thing or something....
  // res.status(200).sendFile(path.join(rootDir, 'views', '/pug/add-product.pug'));
});

/* 
  @route      POST /admin/add-product
  @desc       POST create a new porducr
  @expect     RETURN redirect to home
  @access     Admin
*/
router.post('/add-product', (req, res) => {
  console.log(req.body.title);
  const title = req.body.title;
  const price = req.body.price;
  const desc = req.body.desc;

  if (title.length == 0 || price.length == 0 || desc.length == 0) {
    return res.redirect('/admin/add-product');
  }
  products.push({
    title: req.body.title,
    price: req.body.price,
    desc: req.body.desc
  });
  res.redirect('/home');
});

// module.exports = router;
module.exports = { router, products };
