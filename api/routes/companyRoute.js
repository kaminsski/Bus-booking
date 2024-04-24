const express = require('express');
const { getCompanies, postCompany, deleteCompany, updateCompany } = require('../controllers/companyController');

const router = express.Router()

router.get("/", getCompanies)
router.post("/", postCompany)
router.delete("/:id", deleteCompany)
router.put("/:id", updateCompany)




module.exports = router