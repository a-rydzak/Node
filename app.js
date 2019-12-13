const http = require('http');
const path = require('path');

const rootDir = require('./helpers/path');
const myMiddleware = require('./helpers/middleware');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Globally set any values to the express app, view-engine and views are an example
// enables us to not have to add the .pug after every html page
app.set('view engine', 'pug');
// where to find our templates
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shops');

// give access to just the public css folder of our system
app.use(express.static(path.join(rootDir, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(myMiddleware);
// add Middleware to all - for future use
app.all('/', function(req, res, next) {
  console.log('Middleware happening');
  next();
});

//use admin as the root for all admin routes
app.use(shopRoutes);
app.use('/admin', adminRoutes.router);

// wildcard, if nothing is caught we will render 404 Not found Page
app.use('*', (req, res, next) => {
  res.status(404).render('pug/not-found');
  // res.status(404).sendFile(path.join(rootDir, 'views', '/pug/not-found.pug'));
});

app.listen(8000);

//  Next allows us to go onto the next app.use m
// app.use((req, res, next) => {
//   console.log('1');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('2');
//   res.send({ Hey: 'ohhhh' });
// });

// const server = http.createServer(app);
// server.listen(8000);
