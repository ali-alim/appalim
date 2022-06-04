const mongoose = require("mongoose");

const DeletedSchema = new mongoose.Schema({
  deleted_date:String,
  deleted_name:String,
  },

);

const Deleted = mongoose.model("deleteds", DeletedSchema);
module.exports = Deleted;
