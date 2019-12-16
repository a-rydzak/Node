const Product = require('../models/product');

const getAddProduct = (req, res, next) => {
  res.render('pug/add-product');
  // Path was needed for returning a static file ex - download a thing or something....
  // res.status(200).sendFile(path.join(rootDir, 'views', '/pug/add-product.pug'));
};

const makeProduct = (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const desc = req.body.desc;

  if (title.length == 0 || price.length == 0 || desc.length == 0) {
    return res.redirect('/admin/add-product');
  }

  const product = new Product(title, price, desc);
  product.save();
  res.redirect('/home');
};

module.exports = { getAddProduct, makeProduct, Product };

/* ----------------Notes / Examples
  const makeProduct = (req, res, next) => {
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
  };
*/
