const express = require('express');
const { getSeats, postSeat, deleteSeat, updateSeat, isOcc } = require('../controllers/seatController');

const router = express.Router();

router.get("/", getSeats);
router.post("/", postSeat);
router.post("/isOcc", isOcc);

router.delete("/:id", deleteSeat);
router.put("/:id", updateSeat);

module.exports = router;
