const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/doubling', (req, res) => {
  const number = req.query.input;
  if (number === undefined) {
    response = {
      "error": "Please provide an input!"
    }
  } else {
    response = {
      "received": number,
      "result": number * 2
    }
  }
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
});
