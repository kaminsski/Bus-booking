const Seat = require("../models/Seat");

const getSeats = async (req, res) => {
    try {
        const response = await Seat.find();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const postSeat = async (req, res) => {
    try {
        const { No, isOccupied, user, trip } = req.body;
        const response = await Seat.create({ isOccupied,user,trip, No});
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const isOcc = async (req, res) => {
    try {
        const {   tripId } = req.body;
        console.log(tripId);
        const response = await Seat.find({trip:tripId}).populate("user");
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const deleteSeat = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await Seat.findByIdAndDelete(id);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

const updateSeat = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const response = await Seat.findByIdAndUpdate(
            id,
            updateData,
            { new: true }
        );
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getSeats, postSeat, deleteSeat, updateSeat, isOcc };
