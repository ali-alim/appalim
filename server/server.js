const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));


mongoose
.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(() => console.log("MongoDB connected!"))
.catch(err => console.log(err));


app.use("/api/tasks", require("./routes/tasks"));
app.use("/api/answers", require("./routes/answers"));
app.use("/api/dreams", require("./routes/dreams"));
app.use("/api/visits", require("./routes/visits"));
app.use("/api/trainings", require("./routes/trainings"));
app.use("/api/finances", require("./routes/finances"));
app.use("/api/deleted", require("./routes/deleted"));
app.use("/api/auth", require("./routes/auth"));

app.listen(process.env.PORT, () => {
  console.log("server runs on port: " + process.env.PORT);
});
