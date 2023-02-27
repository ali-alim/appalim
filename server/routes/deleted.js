const express = require('express')
const router = express.Router();
const {getDeleted, createDeleted, deleteDeleted} = require('./../controllers/deleted')

router.get('/', getDeleted);
router.post('/', createDeleted);
router.delete('/:id', deleteDeleted)

module.exports = router;
