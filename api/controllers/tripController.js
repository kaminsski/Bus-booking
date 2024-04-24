const Trip = require("../models/Trip");




// Trip'i filtrelemek için bir controller
const filterTrip = async (req, res) => {
  try {
    
    const { fromWhere, toWhere, date } = req.body;
    const parsedDate = new Date(date);
    const year = parsedDate.getFullYear();
    const month = parsedDate.getMonth();
    const day = parsedDate.getDate();

    const trips = await Trip.find({
        $and: [
            { fromWhere: fromWhere },
            { toWhere: toWhere },
            {
                departureTime: {
                  $gte: new Date(year, month, day), // Belirtilen tarihten itibaren
                  $lt: new Date(year, month, day + 1) // Belirtilen tarihten bir sonraki güne kadar
                }
              }
        ]
      }).populate({
        path: 'bus',
        populate: {
          path: 'company',
          model: 'Company' 
        }
      });
      
    res.status(200).json({ success: true, data: trips });
  } catch (error) {
    console.error('Arama işlemi başarısız oldu:', error);
    res.status(500).json({ success: false, message: 'Arama işlemi başarısız oldu' });
  }
};








const getTrip = async(req,res) =>{
    try {
        const id = req.params.id
        const response = await Trip.findById(id).populate({
            path: 'bus',
            populate: {
              path: 'company',
              model: 'Company' 
            }
          })
        res.json(response)
    } catch (error) {
        console.log(error);
    }
}


const getTrips = async(req,res) =>{
    try {

        const response = await Trip.find().populate({
          path: 'bus',
          populate: {
            path: 'company',
            model: 'Company' 
          }
        })
        res.json(response)
    } catch (error) {
        console.log(error);
    }
}

const postTrip = async(req,res) =>{
    try {
        const {fromWhere, toWhere,departureTime,bus, hour, price} = req.body
        const response = await Trip.create(
           {fromWhere, toWhere,departureTime,bus, hour, price}
        )
        res.json(response)
    } catch (error) {
        console.log(error);
    }
}

const deleteTrip = async(req,res) =>{
    try {
        const id = req.params.id
        const response = await Bus.findByIdAndDelete(id)
        res.json(response)

    } catch (error) {
        console.log(error);
    }
}

const updateTrip= async(req,res) =>{
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
    updateTrip, deleteTrip, postTrip, getTrips, filterTrip, getTrip
}