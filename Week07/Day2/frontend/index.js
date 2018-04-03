const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 3000;

app.use('/assets', express.static('assets'));
app.use(bodyParser.json());

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

app.get('/greeter', (req, res) => {
  const title = req.query.title;
  if (req.query.name === undefined) {
    response = {
    "error": "Please provide a name!"
    }
  } else if (req.query.title === undefined) {
    response = {
      "error": "Please provide a title!",
    };
  } else {
    response = {
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`,
    }
  }
  res.json(response);
});

app.get('/appenda/:appendable', (req, res) => {
  res.json({
    appended: req.params.appendable + "a",
  })
});

app.post('/dountil/:what', (req, res) => {
  let what = req.params.what;
  if (req.body.until === undefined) {
    res.json({ 
      error: 'Please provide a number!',
    });
    return;
  } else if (what === 'sum') {
    let myNumber = 0;
    for (let i = 1; i <= req.body.until; i++) {
      myNumber += i;
    }
    res.json({
      result: myNumber,
    });
  } else if (what === 'factor') {
    let myNumber = 1;
    for (let i = 1; i <= req.body.until; i++) {
      myNumber = myNumber * i;
    }
    res.json({
      result: myNumber,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
});
