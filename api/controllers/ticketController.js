const Ticket = require("../models/Ticket");

const getTickets = async(req,res) =>{
    try {

        const response = await Ticket.find()
        res.json(response)
    } catch (error) {
        console.log(error);
    }
}

const getUserTickets = async(req,res) =>{
    try {
        const id = req.params.id
        const response = await Ticket.find({user:id})
        res.json(response)
    } catch (error) {
        console.log(error);
    }
}

const postTicket = async(req,res) =>{
    try {
        const {user, departureTime,departureLocation,arrivalLocation,seatNumberNo,bus} = req.body
        const response = await Ticket.create(
           {user, departureTime,departureLocation,arrivalLocation,seatNumberNo,bus}
        )
        res.json(response)
    } catch (error) {
        console.log(error);
    }
}

const deleteTicket = async(req,res) =>{
    try {
        const id = req.params.id
        const response = await Bus.findByIdAndDelete(id)
        res.json(response)

    } catch (error) {
        console.log(error);
    }
}

const updateTicket = async(req,res) =>{
    try {
        const id = req.params.id
        const updateData = req.body
        const response = await Bus.findByIdAndUpdate(
            id,
            updateData,
            {new:true}
        )
        res.json(response)
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    getUserTickets,  updateTicket, deleteTicket, postTicket, getTickets
}