const Bus = require("../models/Bus");

const getBuses = async(req,res) =>{
    try {

        const response = await Bus.find()
        res.json(response)
    } catch (error) {
        console.log(error);
    }
}

const postBus = async(req,res) =>{
    try {
        const {company, model,busType,capacity,details,image} = req.body
        const response = await Bus.create(
           {company, model,busType,capacity,details,image}
        )
        res.json(response)
    } catch (error) {
        console.log(error);
    }
}

const deleteBus = async(req,res) =>{
    try {
        const id = req.params.id
        const response = await Bus.findByIdAndDelete(id)
        res.json(response)

    } catch (error) {
        console.log(error);
    }
}

const updateBus = async(req,res) =>{
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
    getBuses, updateBus, deleteBus, postBus
}