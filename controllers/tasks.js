const Tasks = require("../models/Tasks");

const getTasks = async (req, res) => {
  Tasks.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

const createTasks = async (req, res) => {
  const task = req.body;
  const newTask = new Tasks(task);
  await newTask.save();

  res.json(task);
};

const deleteTasks = async (req, res) => {
  const id = req.params.id;
  await Tasks.findByIdAndRemove(id).exec();
  res.send("deleted");
};

module.exports = { getTasks, createTasks, deleteTasks };
