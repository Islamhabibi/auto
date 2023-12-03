const express=require("express");
const userRouter = require("./Router/UserRouter");
const connection = require("./Configuration/Config");
const port = 5665
const app= express() 
//bech ywali ye9bl forma json
app.use(express.json())
 
connection()
app.use("/users",userRouter)
app.listen(port,console.log(`server is runing at http://localhost:${port}`))
 
  