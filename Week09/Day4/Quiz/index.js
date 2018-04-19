const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const PORT = 8080;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());

let conn = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'quiz',
});


app.get('/', (req, res) => {
  res.render('home', {
    title: 'Quiz',
  });
});


app.get('/game', (req, res) => {
  conn.query(`SELECT * FROM questions;`, function(err, questions) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    const question = questions[Math.floor(Math.random() * (questions.length - 1)) + 1];

    conn.query(`SELECT * FROM answers WHERE question_id = ${question.id};`, function(err, answers) {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      res.json({
        id: question.id,
        question: question.question,
        answers,
      });
    });  
  });
});

app.get('/questions', (req, res) => {
  conn.query('SELECT id, question FROM questions;', function(err, result) {
    if (err) {
      console.log(err.toString());
      res.status(400).send('Database error');
      return;
    }

    res.json(result);
  });
});


app.post('/questions', (req, res) => {
  conn.query(`INSERT INTO questions (question) VALUES (?);`, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).json({result: 'Database error'});
      return;
    }
    conn.query(`INSERT INTO answers (answer, is_correct) VALUES (?, ?);`, (err, result) => {
      if (err) {
        console.log(err);
        res.status(400).json({result: 'missing field'});
        return;
      }
      res.json({result: result.insertId});
    });
  });
});


app.delete('/questions/:id', (req, res) => {
  conn.query(`DELETE FROM questions WHERE id = ${req.params.id}`, function(err, question) {
    if (err) {
      console.log(err.toString());
      res.status(400).send('Wrong question');
      return;
    }
    res.json({
      message: 'Ok',
      id: question.deleteId,
    });
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
