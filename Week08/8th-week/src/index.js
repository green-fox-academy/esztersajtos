const express = require ('express');
const path = require ('path');
const mysql = require ('mysql');

const app = express();
const PORT = 3000;
const conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  password: 'root',
  database: 'shop',
  port: 3306,
});
  

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  let sql = 'SELECT * FROM history ORDer BY date DESC LIMIT 15;';
  let queryInputs = [];

  if (req.query.type !== undefined) {
    sql = 'SELECT * FROM history Where type = ? LIMIT 15;';
    queryInputs = [req.query.type];
  }

  conn.query(sql, queryInputs, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }

    res.render('index', {
      title: 'Dashboard',
      history: result,
    });
  });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`); 
});
