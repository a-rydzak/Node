const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(404).render('pug/not-found');
  // res.status(404).sendFile(path.join(rootDir, 'views', '/pug/not-found.pug'));
});

module.exports = router;
