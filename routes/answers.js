const express = require('express')
const router = express.Router();
const {getAnswers, createAnswers} = require('./../controllers/answers')

router.get('/', getAnswers);
router.post('/', createAnswers);

module.exports = router;
