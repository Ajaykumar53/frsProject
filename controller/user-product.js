const Cart = require("../models/cartProducts")
const Product = require("../models/products")
const { v4: uuidv4 } = require('uuid')
const Users = require("../models/userData")
const Auth = require("../models/Auth")

exports.productList = (req, res, next) => {
  Product.fetchProductLists().then(([singleProduct]) => {
    res.render('home', { products: singleProduct })
  })
}

exports.cartProductList = (req, res, next) => {
  Cart.fetchCartProducts().then(([product]) => {
    res.render('cart-products', { products: product })
  })
}

exports.addProductToCart = (req, res, next) => {
  const productId = req.body.productId
  Cart.addCartProducts(productId)
  res.redirect("/cart")
}


exports.favoriteProductList = (req, res, next) => {
  res.send("hello favorite")
}

exports.productDetails = (req, res, next) => {
  const productId = req.params.productId
  Product.fetchProductDetails(productId).then(([productDetail]) => {
    res.render('product-details', { product: productDetail })
  })
}

exports.signUp = (req, res, next) => {
  res.render('Signup-Login', { signup: true })
}

exports.postSignUp = (req, res, next) => {
  const { name, email, password } = req.body
  Users.signUp(name, email, password)
  res.redirect('/login')
}

exports.Login = (req, res, next) => {
  res.render('Signup-Login', { signup: false })
}
exports.postLogin = (req, res, next) => {
  const { email, password } = req.body
  try{
  const user = Users.Login(email,password)
  const token = Auth.setCookie(user)
  res.cookie('token',token)
  res.redirect('/')
  }catch(err){
    res.send("u are not correct")
    // res.render('Signup-Login', { signup: false ,user: err.message})
  }
}