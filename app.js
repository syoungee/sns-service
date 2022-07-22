const express = require("express");
const config = require("./config");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("hello welcome to my sns-service!🤍");
});
