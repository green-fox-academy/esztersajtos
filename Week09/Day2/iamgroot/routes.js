const express = require('express');
const app = express();

app.get('/groot/', (req, res) => {
  if (req.query.message === undefined) {
    res.json({
      error: 'I am Groot!',
    });
  } else {
  res.status(200).json({
    received: 'somemessage',
    translasted: 'I am Groot!'
    })
  }
});

module.exports = app;