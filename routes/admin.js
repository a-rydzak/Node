const path = require('path');
const rootDir = require('../helpers/path');
const myMiddleware = require('../helpers/middleware');

const express = require('express');
const router = express.Router();
const {
  getAddProduct,
  makeProduct
} = require('../controllers/product-controller');

router.use(myMiddleware);

/*
  @route      GET /admin/add-product
  @desc       GET Admin Product Page
  @expect     RETURN Admin Product Page
  @access     Admin
*/
router.get('/add-product', getAddProduct);

/* 
  @route      POST /admin/add-product
  @desc       POST create a new porducr
  @expect     RETURN redirect to home
  @access     Admin
*/
router.post('/add-product', makeProduct);

module.exports = { router };

/*-------------Notes/Examples
  Use middleware in these routes only example
  router.post('/', (req, res, next) => {
    console.log('Different Middleware');
    next();
  });

  module.exports = router;
*/
