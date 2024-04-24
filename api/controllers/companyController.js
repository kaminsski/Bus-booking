const Company = require("../models/Company");

const getCompanies = async(req,res) =>{
    try {
   

        const response = await Company.find()
        res.json(response)
    } catch (error) {
        console.log(error);
    }
}

const postCompany = async(req,res) =>{
    try {
        const {name,details,image} = req.body
        const response = await Company.create(
           {name,details,image}
        )
        res.json(response)
    } catch (error) {
        console.log(error);
    }
}

const deleteCompany = async(req,res) =>{
    try {
        const id = req.params.id
        const response = await Company.findByIdAndDelete(id)
        res.json(response)

    } catch (error) {
        console.log(error);
    }
}

const updateCompany = async(req,res) =>{
    try {
        const id = req.params.id
        const updateData = req.body
        const response = await Company.findByIdAndUpdate(
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
    updateCompany, deleteCompany, postCompany, getCompanies
}