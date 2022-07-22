const express = require("express");
const router = require("./routes/index.js");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 3000;
const corsOption = {
  optionsSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOption));
app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});

app.get("/", router, (req, res, next) => {
  res.send("hello welcome to my sns-service!🤍");
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.sendStatus(500);
});
