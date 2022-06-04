const Deleted = require("../models/Deleted");

const getDeleted = async (req, res) => {
  Deleted.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

const createDeleted = async (req, res) => {
  const deleted = req.body;
  const newDeleted = new Deleted(deleted);
  await newDeleted.save();

  res.json(deleted);
};

const deleteDeleted = async (req, res) => {
  const id = req.params.id;
  await Deleted.findByIdAndRemove(id).exec();
  res.send("deleted");
};

module.exports = { getDeleted, createDeleted, deleteDeleted };
