const path = require('path');
const express = require('express');

const router = express.Router();

const rootDir = require('../helpers/path');

const { getHome, redirHome } = require('../controllers/shop-controller');

// middleware on these routes only
router.all('/', redirHome);

// router.get('/home', (req, res) => {
//   res.send('Home!!', 200);
// });

// router.get('/', (req, res, next) => {
//   res.status(200).send('You Have Landed');
// });

router.get('/home', getHome);

module.exports = router;
