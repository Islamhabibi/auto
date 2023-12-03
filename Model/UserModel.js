const mongoose = require("mongoose")

const user_schema= new mongoose.Schema(
    {
        name: String, 
        email:  String,
        password: String,
        phone: Number,
            
        
    },
    {
        timestamps: true,
    }
    )
    module.exports= mongoose.model('userss', user_schema)

