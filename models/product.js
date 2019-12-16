const fs = require('fs');

const path = require('path');
module.exports = class Product {
  constructor(title, price, desc) {
    this.title = title;
    this.price = price;
    this.desc = desc;
  }

  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'products.json'
    );

    fs.readFile(p, (err, fileData) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileData);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  //   cb will act as out callback
  static fetchAll(cb) {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'products.json'
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};
