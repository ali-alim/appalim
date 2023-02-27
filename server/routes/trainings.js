const express = require('express')
const router = express.Router();
const {getTrainings, createTrainings, deleteTrainings} = require('./../controllers/trainings')

router.get('/', getTrainings);
router.post('/', createTrainings);
router.delete('/:id', deleteTrainings)

module.exports = router;
