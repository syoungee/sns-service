const morgan = require("morgan");
const express = require("express");
const router = require("./routes/index");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3000;
const corsOption = {
  optionsSuccessStatus: 200,
};

app.use(cors(corsOption));
app.use(morgan("tiny"));
app.use(express.json());

app.use("/", router, (req, res, next) => {
  res.send("hello welcome to my sns-service!🤍");
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.sendStatus(500);
});

app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});
