const Trainings = require("./../models/Trainings");

const getTrainings = async (req, res) => {
  Trainings.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

const createTrainings = async (req, res) => {
  const training = req.body;
  const newTraining = new Trainings(training);
  await newTraining.save();

  res.json(training);
};

const deleteTrainings = async (req, res) => {
  const id = req.params.id;
  await Trainings.findByIdAndRemove(id).exec();
  res.send("deleted");
};

module.exports = { getTrainings, createTrainings, deleteTrainings };
