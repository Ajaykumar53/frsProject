const Product = require("./products");
let newData = null


//not working ----------------------------------------------------------//not working lease not use it

function detailedProduct (userProductId)  {Product.fetchProductLists(product=>{
  const productDetails = product.find(product =>product.productId === userProductId )
  newData = productDetails;
}) 
return newData;
}

//not working ----------------------------------------------------------//not working lease not use it

function getProductDetails(userProductId){
  const productDetail = detailedProduct(userProductId)
  return productDetail;
}

exports.getProductDetails = getProductDetails;

//not working ----------------------------------------------------------//not working lease not use it