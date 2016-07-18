pry = require('pryjs');

'use strict';
const express = require('express');
const app = express();
const morgan = require('morgan');

const departures = require('./departures.js');
const departureFilters = require('./helpers/departure_filters.js');

app.use(morgan('short'));
app.use(express.static('./public'));

app.get('/departures', (req, res) => {
  if (req.query.q === 'track') {
    departureFilters.sortByTrack(res);
  } else if (req.query.q === 'status') {
    departureFilters.sortByStatus(res);
  } else if (req.query.q === 'late') {
    departureFilters.filterByLate(res);
  } else {
    departureFilters.sortByTime(res);
  }
});

// from http://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
String.prototype.toCamelCase = (str) => {
  return str
      .replace(/\s(.)/g, function ($1) { return $1.toUpperCase(); })
      .replace(/\s/g, '')
      .replace(/^(.)/, function ($1) { return $1.toLowerCase(); });
};

var port = process.env.PORT || 3000;

var server = app.listen(port);
