const mongoose = require('mongoose');

const BusSchema = mongoose.Schema({
    company:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    model:{
        type:String,
        required:true,
        trim:true,
        
    },
    busType:{
        type:String,
        required:true,
        trim:true,
    },
    capacity:{
        type:Number,
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
        trim:true
    }
}, {timestamps:true})

module.exports = mongoose.model("Bus", BusSchema)