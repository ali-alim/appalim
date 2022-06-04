const mongoose = require("mongoose");

const FinancesSchema = new mongoose.Schema({
  finance_date:String,
  finance_name:String,
  finance_month:String,
  },

);

const Finances = mongoose.model("finances", FinancesSchema);
module.exports = Finances;
