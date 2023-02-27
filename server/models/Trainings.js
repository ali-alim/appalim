const mongoose = require("mongoose");

const TrainingsSchema = new mongoose.Schema({
  training_date:String,
  training_name_1:String,
  training_name_2:String,
  training_name_3:String,
  training_numInSets_1:String,
  training_numInSets_2:String,
  training_numInSets_3:String,
  training_numOfSets_1:String,
  training_numOfSets_2:String,
  training_numOfSets_3:String,
  training_totalNum_1:String,
  training_totalNum_2:String,
  training_totalNum_3:String,
  },

);

const Trainings = mongoose.model("trainings", TrainingsSchema);
module.exports = Trainings;
