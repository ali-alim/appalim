const express = require('express')
const router = express.Router();
const {getTasks, createTasks, deleteTasks} = require('./../controllers/tasks')

router.get('/', getTasks);
router.post('/', createTasks);
router.delete('/:id', deleteTasks)

module.exports = router;
