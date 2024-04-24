const express = require('express');
const { getBuses, postBus, deleteBus, updateBus } = require('../controllers/busController');

const router = express.Router()

router.get("/", getBuses)
router.post("/", postBus)
router.delete("/:id", deleteBus)
router.put("/:id", updateBus)




module.exports = router