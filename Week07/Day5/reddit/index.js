const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const PORT = 3000;

app.use(bodyParser.json());

let conn = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'reddit',
});

app.get('/hello', (req, res) => {
  const name = req.query.name || 'Word';
  res.json({
    message:`Hello ${name}!`,
  });
});

app.get('/posts', (req,res) => {
  conn.query('SELECT * FROM posts;', function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json(rows);
  });
});

app.post('/posts', (req, res) => {
  conn.query(`INSERT INTO posts (title, url, score) VALUES ('${req.body.title}', '${req.body.url}', 1);`, function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json({
      message: 'Ok',
      id: rows.insertId,
    });
  });
});

app.put('/posts/:id/upvote', (req, res) => {
  conn.query(`UPDATE posts SET score = score + 1 WHERE id = ${req.params.id}`, function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json({
      message: 'Ok',
      id: rows.addScore,
    });
  });
});

app.put('/posts/:id/downvote', (req, res) => {
  conn.query(`UPDATE posts SET score = score - 1 WHERE id = ${req.params.id}`, function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json({
      message: 'Ok',
      id: rows.reduceScore,
    });
  });
});

app.delete('/posts/:id', (req, res) => {
  conn.query(`DELETE FROM posts WHERE id = ${req.params.id}`, function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json({
      message: 'Ok',
      id: rows.deleteId,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});



