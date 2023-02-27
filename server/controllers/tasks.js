const Tasks = require("./../models/Tasks");

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

const updateTask = async (req, res) => {
  const updatedStatus = req.body.task_done;
  const id = req.params.id;
  try {
    Tasks.findById(id, (err, updatedTask) => {
      updatedTask.task_done = updatedStatus;
      updatedTask.save();
      console.log(`updatedTicket on the server: `, updatedTask);
      res.send("successfully updated");
    });
  } catch (err) {
    console.log(err);
  }
};

const getTask = async (req, res) => {
  Tasks.findById({ _id: req.params.id }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

const deleteTasks = async (req, res) => {
  const id = req.params.id;
  await Tasks.findByIdAndRemove(id).exec();
  res.send("deleted");
};

module.exports = { getTasks, getTask, createTasks, updateTask, deleteTasks };
