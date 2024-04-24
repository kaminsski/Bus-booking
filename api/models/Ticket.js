const mongoose = require('mongoose');

const BusTicketSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    departureTime: {
        type: Date,
        required: true
    },
    departureLocation: {
        type: String,
        required: true,
        trim: true
    },
    arrivalLocation: {
        type: String,
        required: true,
        trim: true
    },
    seatNumberNo: {
        type: String,
        required: true,
        trim: true
    },
    bus: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bus',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("BusTicket", BusTicketSchema);
