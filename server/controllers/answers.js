const Answers = require("./../models/Answers");

const getAnswers = async (req, res) => {
  Answers.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

const createAnswers = async (req, res) => {
  const answer = req.body;
  console.log(`Body: `, req.body);
  const newAnswer = new Answers(answer);
  await newAnswer.save();

  res.json(answer);
};

module.exports = { getAnswers, createAnswers };
