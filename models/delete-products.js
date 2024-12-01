const fs = require('fs')
const path = require('path')
const rootDir = require('../utils/pathUtil')
const filePath = path.join(rootDir, 'data', 'productData.json');


module.exports = class Product {
  constructor(productName,productDescription,productPrice,productImage){
    this.productName = productName
    this.productDescription = productDescription
    this.productPrice = productPrice
    this.productImage = productImage
  }

  save(){
    Product.fetchProductLists((product) =>{
      if(this.productId){
        product = product.map(nProduct => {
          return nProduct.productId === this.productId ? this : nProduct
        })
      }else{
        this.productId = Math.random().toString()
        product.push(this)
      }

      fs.writeFile(filePath,JSON.stringify(product,null,2),(err)=>{
      if(err){
      console.log(err)
      }
    })
    })
  }
  static fetchProductLists(callback){
    // return productLists;
    fs.readFile(filePath,'utf-8',(err,dataJson)=>{
      let data;
      if (dataJson.trim() === '') {
        // File exists but is empty
        console.log('File is empty. Initializing with empty array...');
        data = [];
      } else {
        try {
          data = JSON.parse(dataJson); // Parse the JSON data
        } catch (parseError) {
          console.error('Invalid JSON. Initializing with empty array...');
          data = []; // Return an empty array if JSON is invalid
        }
      }
      callback(data);
    })
    
  }
  }