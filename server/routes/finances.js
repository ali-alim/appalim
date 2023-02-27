const express = require('express')
const router = express.Router();
const {getFinances, createFinances, deleteFinances} = require('./../controllers/finances')

router.get('/', getFinances);
router.post('/', createFinances);
router.delete('/:id', deleteFinances)

module.exports = router;
