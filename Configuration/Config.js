const mongoose = require("mongoose")
const connection=async ()=>{
    try {
        await mongoose
        .connect("mongodb+srv://islemhabibi93:islemhabibi.@cluster0.ghnfxem.mongodb.net/")
        //.connect("mongodb://127.0.0.1:27017/islemauth" ) 
        console.log("database is connect")
    } catch (error) {
        console.log(`Could not connect to MongoDB: ${error.message}`)
    }
}   
module.exports= connection  