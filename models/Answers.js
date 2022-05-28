const mongoose = require("mongoose");

const AnswersSchema = new mongoose.Schema({
  дата:String,
  новое:String,
  достижение:String,
  торможение:String,
  откладывание:String,
  цель:String,
  благодарность:String,
  впечатление:String,
  помехи:String,
  цели:String,
  помощь:String,
  возможности:String,
  здоровье:String,
  шаги:String,
  страхи:String,
  решения:String,
  встречи:String,
  навыки:String,
  назад:String,
  бесполезное:String,
  важное:String,
  },

);

const Answers = mongoose.model("answers", AnswersSchema);
module.exports = Answers;
