const users= require('../Model/UserModel')
//crypte la MDB
const bcrypt = require('bcryptjs')

//jwt = json web token
const jwt = require('jsonwebtoken');


exports.Register=async(req,res)=>{
     // Get user data from request body
     const { name, email, password,phone} = req.body;
    try {
        const finduser=await users.findOne({email})
        console.log(finduser)
        if (finduser){
            res.status(400).send({error:[{msg:'User already exists'}]})//convertire error d'objet vers un tableau
            // throw new Error ('User already exists')
        }  
        else {
            const user = new users(req.body)

         //   Hash password
        const hashedPassword = bcrypt.hashSync(password,10);
        user.password=hashedPassword
        const token=jwt.sign({id:user._id},"123456")
        await user.save()
        res.status(200).send({msg:"register terminie",user,token})
        }
    } catch (error) {
        res.status(500)
        .send(error)  
    }
}
 exports.Login= async (req,res)=>{
    const {email,password}= req.body
    try {
        const finduser= await users.findOne({email})
        if(!finduser ){
         res.status(400).send({errors:[{msg:"errur not exist"}]})
        }else{
               //  comparison entre les deux  password
        const hashedPassword = bcrypt.compareSync(password,finduser.password);
         if (!hashedPassword){
            res.status(400).send({errors:[{msg:"errur password"}]})
         }else{
            const token=jwt.sign({id:finduser._id},"123456")   
            res.status(200).send({msg:"vous etre connecte ",finduser,token})

         } 
        }
    } catch (error) {
        res.status(500)
        .send(error)
    }
 }
 exports.UpdateUser = async(req,res)=>{
    try {
        const user= await users.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new: true})
        res.status(200).send({errors:[{msg:'user update'}],user})
    } catch (error) {
        console.log(error)
    }
 }