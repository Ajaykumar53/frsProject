const db = require('../utils/databaseUtil')


module.exports = class Product {
  constructor(productName,productDescription,productPrice,productImage,productId){
    this.productName = productName
    this.productDescription = productDescription
    this.productPrice = productPrice
    this.productURL = productImage
    this.productId = productId
  }

  save(){
    if(this.productId){
      console.log(this.productId,"here the product ID")
      return db.execute('UPDATE products SET  productName=?,productDescription=?,productPrice=?,productURL=? WHERE productId=?', [this.productName,this.productDescription,this.productPrice,this.productURL,this.productId])
    }else{
      return db.execute('INSERT INTO products (productName,productDescription,productPrice,productURL) VALUES (?,?,?,?)',
        [this.productName,this.productDescription,this.productPrice,this.productURL])
    }
  }
  static fetchProductLists(){
    return db.execute('SELECT * FROM products')
  }
  static fetchProductDetails(productId){
    return db.execute(`SELECT *
    FROM products
    WHERE productId = ?`, [productId])
  }
  static deleteProduct (productId){
    return db.execute('DELETE FROM products WHERE productId = ?',[productId])
  }
}