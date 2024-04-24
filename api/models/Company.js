const mongoose = require('mongoose');

const CompanySchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    details:{
        type:String,
        required:true,
        trim:true,
    },
    image:{
        type:String,
        required:true,
        trim:true,
        
    }
}, {timestamps:true})

module.exports = mongoose.model("Company", CompanySchema)