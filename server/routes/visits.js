const express = require('express')
const router = express.Router();
const {getVisits, createVisits, deleteVisits} = require('./../controllers/visits')

router.get('/', getVisits);
router.post('/', createVisits);
router.delete('/:id', deleteVisits)

module.exports = router;
