const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;

app.use('/static', express.static('static'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.post('/api/endpoint', (req, res) => {
  console.log(req.body);
  res.json({
    message: `${req.body.attr1}...`,
  });
});

app.get('/api/hello', (req, res) => {
  console.log(req.body);
  const name = req.query.name || 'Guest';
  res.json({
    message:`Hello ${name}!`,
  });
});

const mentors = [
  { name: 'Istvan', age: 30 },
  { name: 'Bence', age: 42 },
  { name: 'Balazs', age: 28 },
];

const listMentors = (req, res) => {
  console.log(req);
  res.json(mentors);
}

app.get('/api/mentors', listMentors);

app.get('/api/mentors/:mentorId', (req, res) => {
  const mentor = mentors[req.params.mentorId -1];

  if (mentor === undefined) {
    res.status(404);
    res.json({
      message: `No mentor with id ${req.params.mentorId}`,
    });
  } else {
    res.json(mentor);
  }

  res.json(mentors[req.params.mentorsId -1]);
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
});