const mongoose = require("mongoose");

const TasksSchema = new mongoose.Schema({
  task_date:String,
  task_name:String,
  task_done: Boolean,
  task_deadline:String,
  task_category:String,
  },

);

const Tasks = mongoose.model("tasks", TasksSchema);
module.exports = Tasks;
