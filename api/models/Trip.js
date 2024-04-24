const mongoose = require('mongoose');

const TripSchema = mongoose.Schema({
    fromWhere: {
        type: String,
        required: true,
        trim: true
    },
    toWhere: {
        type: String,
        required: true,
        trim: true
    },
    departureTime: {
        type: Date,
        required: true
    },
    bus: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bus',
        required: true
    },
    hour: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: true,
        trim: true
    }

}, { timestamps: true });

module.exports = mongoose.model("Trip", TripSchema);
