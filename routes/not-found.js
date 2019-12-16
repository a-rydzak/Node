const express = require('express');

const router = express.Router();
const { get404 } = require('../controllers/error-controller');

router.get('/', get404);

module.exports = router;

/*-------------Notes/Examples
  router.get('/', (req, res, next) => {
    res.status(404).render('pug/not-found');
    res.status(404).render('pug/not-found');
    res.status(404).sendFile(path.join(rootDir, 'views', '/pug/not-found.pug'));
  });
*/
