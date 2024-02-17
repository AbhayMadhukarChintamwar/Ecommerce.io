import express from "express";
import ProductRoute from './features/products/product.routes.js'

const server = express();
server.get('/',(req, res)=>{
    res.send("Welcome to the ecom web site")
})

server.use('/api/product', ProductRoute)
 
server.listen(2001,()=>{
    console.log("server listing on port 2001")
})
 
