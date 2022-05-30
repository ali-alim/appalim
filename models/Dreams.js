const mongoose = require("mongoose");

const DreamsSchema = new mongoose.Schema({
  dream_date:String,
  dream_name:String,
  },

);

const Dreams = mongoose.model("dreams", DreamsSchema);
module.exports = Dreams;
