const express = require('express');
const { getTrips, postTrip, deleteTrip, updateTrip, filterTrip, getTrip } = require("../controllers/tripController");

const router = express.Router();

router.get("/", getTrips); 
router.get("/:id", getTrip); 

router.post("/filterTrip", filterTrip); 


router.post("/", postTrip);
router.delete("/:id", deleteTrip);
router.put("/:id", updateTrip);

module.exports = router;
