// server/models/Product.js
const db = require('../config/database');

const Product = {
  getAll: (callback) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  }
};

module.exports = Product;

