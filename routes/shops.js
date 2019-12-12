const path = require('path');
const express = require('express');

const router = express.Router();

const rootDir = require('../helpers/path');

const adminData = require('./admin');

router.use('/', (req, res, next) => {
  console.log('Middleware Happening');
  next();
});

// router.get('/home', (req, res) => {
//   res.send('Home!!', 200);
// });

// router.get('/', (req, res, next) => {
//   res.status(200).send('You Have Landed');
// });

router.get('/home', (req, res) => {
  console.log(adminData.products);
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
