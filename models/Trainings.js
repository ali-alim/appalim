const mongoose = require("mongoose");

const TrainingsSchema = new mongoose.Schema({
  training_date:String,
  training_name:String,
  training_numInSets:String,
  training_numOfSets:String,
  training_totalNum:String,
  },

);

const Trainings = mongoose.model("trainings", TrainingsSchema);
module.exports = Trainings;
