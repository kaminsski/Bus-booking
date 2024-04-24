const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    gender:{
        type:String,
        required:true,
        trim:true

    }
}, {timestamps:true})

module.exports = mongoose.model("User", UserSchema)