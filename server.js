'use strict';
const express = require('express');

const app = express();
const morgan = require('morgan');
const moment = require('moment');
moment().format();

const departures = require('./departures.js')

app.use(morgan('short'));

app.use(express.static('./public'))

app.get('/departures', (req, res) => {
  res.send(departures)
});

app.listen(3000, function() {
  console.log(moment.locale());
})
