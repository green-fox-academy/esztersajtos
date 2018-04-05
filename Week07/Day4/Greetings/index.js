const express = require('express');
const app = express();
const PORT =3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  if (req.query.name === undefined) {
    res.render('home', {
      title: 'Hello World',
      greeting: 'Guest',
    });
  } else {
    res.render('home', {
      title: 'Hello World',
      greeting: req.query.name,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});