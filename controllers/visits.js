const Visits = require("../models/Visits");

const getVisits = async (req, res) => {
  Visits.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

const createVisits = async (req, res) => {
  const visit = req.body;
  const newVisit = new Visits(visit);
  await newVisit.save();

  res.json(visit);
};

const deleteVisits = async (req, res) => {
  const id = req.params.id;
  await Visits.findByIdAndRemove(id).exec();
  res.send("deleted");
};

module.exports = { getVisits, createVisits, deleteVisits };
