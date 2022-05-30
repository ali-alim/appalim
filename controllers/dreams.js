const Dreams = require("../models/Dreams");

const getDreams = async (req, res) => {
  Dreams.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

const createDreams = async (req, res) => {
  const dream = req.body;
  const newDream = new Dreams(dream);
  await newDream.save();

  res.json(dream);
};

const deleteDreams = async (req, res) => {
  const id = req.params.id;
  await Dreams.findByIdAndRemove(id).exec();
  res.send("deleted");
};

module.exports = { getDreams, createDreams, deleteDreams };
