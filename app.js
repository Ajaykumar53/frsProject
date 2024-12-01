const express = require('express')

// importing routes
const user = require('./routes/userRoutes')
const seller = require('./routes/sellerRoutes')
const app = express()

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(user.userRouter)
app.use(seller.sellerRouter)
app.use((req,res,next)=> {
  res.status(404).render('pageNotFound')
})




app.listen(3000,()=>{
  console.log("app is listening on port http://localhost:3000")
})