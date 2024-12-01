const express = require('express')
const sellerRouter = express.Router()

// importing controller
const productsController = require('../controller/manage-product')

sellerRouter.get("/add-product",productsController.uploadProduct)
sellerRouter.post("/add-product",productsController.productResponse)
sellerRouter.get("/manage-products",productsController.productManager)
sellerRouter.get('/edit-product/:productId',productsController.editProduct)
sellerRouter.post('/edit-product',productsController.postEditedProduct)
sellerRouter.post('/delete-product',productsController.deleteProduct)
exports.sellerRouter = sellerRouter;
