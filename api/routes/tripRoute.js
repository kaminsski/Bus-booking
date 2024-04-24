const express = require('express');
const { getTripsAll, postTrip, deleteTrip, updateTrip, filterTrip, getTrip } = require("../controllers/tripController");

const router = express.Router();

router.get("/getAll", getTripsAll); 
router.get("/:id", getTrip); 

router.post("/filterTrip", filterTrip); 


router.post("/", postTrip);
router.delete("/:id", deleteTrip);
router.put("/:id", updateTrip);

module.exports = router;
