'use strict';
​
const test = require('tape');
const request = require('supertest');
const app = require('../routes');
​
test('GET /', (t) => {
  request(app)
    .get('/')
    .expect('somemessage')
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});