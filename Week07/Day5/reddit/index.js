const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const PORT = 3000;

app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  const name = req.query.name || 'Word';
  res.json({
    message:`Hello ${name}!`,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

let conn = mysql.createConnection ({
  host: 'localhost',
  user: 'makkmarci',
  password: 'password',
});

