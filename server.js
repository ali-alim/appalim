const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
dotenv.config();

mongoose.connect(
  process.env.MONGO_URI,
  () => console.log("Database connected"),
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// express.json should be above cors()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/answers", require("./routes/answers"));
app.use("/tasks", require("./routes/tasks"));
app.use("/dreams", require("./routes/dreams"));
app.use("/visits", require("./routes/visits"));
app.use("/trainings", require("./routes/trainings"));
app.use("/finances", require("./routes/finances"));
app.use("/deleted", require("./routes/deleted"));
app.use("/auth", require('./routes/auth'));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("*", (req, res) => {
    res.send("Api running");
  });
}

app.listen(process.env.PORT, () => {
  console.log("server runs on port: " + process.env.PORT);
});
