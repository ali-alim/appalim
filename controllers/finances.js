const Finances = require("../models/Finances");

const getFinances = async (req, res) => {
  Finances.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

const createFinances = async (req, res) => {
  const finance = req.body;
  const newVisit = new Finances(finance);
  await newVisit.save();

  res.json(finance);
};

const deleteFinances = async (req, res) => {
  const id = req.params.id;
  await Finances.findByIdAndRemove(id).exec();
  res.send("deleted");
};

module.exports = { getFinances, createFinances, deleteFinances };
