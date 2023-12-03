var express = require("express")
const { Register, Login, UpdateUser } = require("../Controller/UserController")
const { registervalidation, validation, loginvalidation } = require("../middleware/validation")
const { IsAuth } = require("../middleware/IsAuth")
var userRouter = express.Router()

userRouter.post("/register",registervalidation,validation,Register)
userRouter.post("/login",loginvalidation,validation,Login)
userRouter.get("/getcurrent",IsAuth,(req,res)=>{res.send(req.user)})
userRouter.put("/update/:id",UpdateUser)
module.exports = userRouter
