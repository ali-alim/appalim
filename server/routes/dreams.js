const express = require('express')
const router = express.Router();
const {getDreams, createDreams, deleteDreams} = require('./../controllers/dreams')

router.get('/', getDreams);
router.post('/', createDreams);
router.delete('/:id', deleteDreams)

module.exports = router;
