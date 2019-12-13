const http = require('http');
const path = require('path');

const rootDir = require('./helpers/path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shops');
const notFound = require('./routes/not-found');

const app = express();
/* 
Globally set any values to the express app, view-engine and views are an example
enables us to not have to add the .pug after every html page
*/
app.set('view engine', 'pug');
//where to find our templates
app.set('views', 'views');

/* 
const expressHbs = require('express-handlebars');
app.engine('hbs', expressHbs());
app.set('view engine', 'hbs');
app.set('views', 'views/hbs');
*/

// give access to just the public css folder of our system
app.use(express.static(path.join(rootDir, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// Use My Middleware for my admin routes

//use admin as the root for all admin routes
app.use(shopRoutes);

app.use('/admin', adminRoutes.router);

// wildcard, if nothing is caught we will render 404 Not found Page
app.use('*', notFound);

// app.use((req, res, next) => {
//   res.status(404).render('404', { pageTitle: 'Page Not Found' });
// });

app.listen(8000);
