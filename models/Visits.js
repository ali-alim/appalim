const mongoose = require("mongoose");

const VisitsSchema = new mongoose.Schema({
  visit_date:String,
  visit_name:String,
  },

);

const Visits = mongoose.model("visits", VisitsSchema);
module.exports = Visits;
