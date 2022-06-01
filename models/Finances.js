const mongoose = require("mongoose");

const FinancesSchema = new mongoose.Schema({
  visit_date:String,
  visit_name:String,
  },

);

const Finances = mongoose.model("finances", FinancesSchema);
module.exports = Finances;
