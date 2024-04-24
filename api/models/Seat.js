
const mongoose = require('mongoose');

const SeatSchema = mongoose.Schema({
    No: {
        type: String,
        required: true,
        trim: true,
    },
    isOccupied: {
        type: Boolean,
        default: false
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    trip:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Trip",
        required:true
    }
}, { timestamps: true });

module.exports = mongoose.model("Seat", SeatSchema);