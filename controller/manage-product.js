const Carts = require("../models/cartProducts")
const Product = require("../models/products")

exports.uploadProduct = (req,res,next) => {
  res.render('add-product',{editing:false})
}

exports.productResponse = (req,res,next) => {
  const{productName,productDescription,productPrice,productImage} = req.body
  const product = new Product(productName,productDescription,productPrice,productImage)
  product.save()
  res.render('added-product')
}

exports.productManager = (req,res,next) => {
  Product.fetchProductLists().then(([singleProduct]) => {
  res.render('manage-product',{products:singleProduct})})
}

exports.editProduct =  (req,res,next) => {
  const editProductId = req.params.productId
  const editing = req.query.editing
  Product.fetchProductLists().then(([product]) => {
    const [editingProduct] = product.filter(product => {
      return product.productId == editProductId
    })
    res.render('add-product', { product: editingProduct, editing: editing });
  })
  
}

exports.postEditedProduct = (req,res,next) => {
  const{productId,productName,productDescription,productPrice,productImage} = req.body
  const product = new Product(productName,productDescription,productPrice,productImage,productId)
  product.save()
  res.redirect("/manage-products")
}
exports.deleteProduct =  (req,res,next) => {
  const deleteProductId = req.body.productId
  Product.deleteProduct(deleteProductId)
  res.redirect('/')
}