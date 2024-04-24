const express = require('express');
const { getUserTickets,getTickets, postTicket, deleteTicket, updateTicket } = require('../controllers/ticketController');

const router = express.Router()

router.get("/", getTickets)
router.get("/:id", getUserTickets)

router.post("/", postTicket)
router.delete("/:id", deleteTicket)
router.put("/:id", updateTicket)




module.exports = router