const db = require('../utils/databaseUtil')
const Product = require("../models/products")

module.exports =class Cart{
  static addCartProducts(productId){
        db.execute(
          'INSERT IGNORE INTO cartProducts (cartProductId) VALUES (?)',
          [productId]
        )
  }
    static fetchCartProducts(){
      const productIds = db.execute('SELECT cartProductId FROM cartProducts').then(([p])=>{
        return p.map(productId => productId.cartProductId)
          })
      const cartProductList = productIds.then((productIds) => {
        if (!productIds || productIds.length === 0) {
          // Return an empty array or a resolved promise with no products
          return Promise.resolve([]);
        }
        const placeholders = productIds.map(() => '?').join(',');
        const query = `SELECT * FROM products WHERE productId IN (${placeholders})`;
        return db.execute(query, productIds);
      })
      return cartProductList;
    }
  }