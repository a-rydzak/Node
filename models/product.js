const products = [];

module.exports = class Product {
  constructor(title, price, desc) {
    this.title = title;
    this.price = price;
    this.desc = desc;
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
};
