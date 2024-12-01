const express = require('express')

const userController = require('../controller/user-product')
const profileController = require('../controller/profile')

const userRouter = express.Router()

userRouter.get("/",userController.productList)
userRouter.get("/cart",userController.cartProductList)
userRouter.post("/cart",userController.addProductToCart)
userRouter.get("/profile",profileController.profileData)
userRouter.get("/favorite",userController.favoriteProductList)
userRouter.get("/product-details/:productId",userController.productDetails)
userRouter.get("/signup",userController.signUp)
userRouter.post("/signup",userController.postSignUp)
userRouter.get("/login",userController.Login)
userRouter.post("/login",userController.postLogin)

exports.userRouter = userRouter;