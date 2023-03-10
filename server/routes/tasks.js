const router = require('express').Router();
const {getTasks, createTasks, getTask, updateTask, deleteTasks} = require('./../controllers/tasks')

router.get('/', getTasks);
router.get('/:id', getTask);
router.post('/', createTasks);
router.put('/:id', updateTask);
router.delete('/:id', deleteTasks)

module.exports = router;
