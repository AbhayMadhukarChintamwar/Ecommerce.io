import express from "express";



const server = express();
server.use((req, res)=>{
    res.send("Welcome to the ecom web site")
})

 
server.listen(2001,()=>{
    console.log("server listing on port 2001")
})
 