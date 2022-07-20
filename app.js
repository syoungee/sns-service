const express = require('express');
const config = require('./config');
const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('hello welcome to my sns-service!🤍')
})

app.listen(port, () => {
  console.log(`Express is running on port ${port}`)
})
