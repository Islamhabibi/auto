const jwt = require('jsonwebtoken');
const users = require('../Model/UserModel')
exports.IsAuth=async(req,res,next)=>{
    const token= req.header("token")
    try {
        //
        const decode=jwt.decode(token)
        console.log(decode)
        if(!decode){
            res.status(400).send({msg:'you are not authorized'})
        }
        const user = await users.findById(decode.id)
        req.user=user
        next()
    } catch (error) {
        console.log(error)
    }
}