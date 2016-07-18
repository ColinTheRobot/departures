const departures = require('./../departures.js');

module.exports = {
  filterByLate: (res) => {
    var filtered = departures.filter(val => val.Status == 'Late');
    res.send(filtered);
  },

  sortByTime: (res) => {
    departures.sort((a, b) => {
      if (a.ScheduledTime < b.ScheduledTime) {
        return -1;
      } else {
        return 1;
      }
    });
    res.send(departures);
  },

  sortByStatus: (res) => {
    let table = {
      allAboard: 1,
      nowBoarding: 2,
      late: 3,
      onTime: 4
    };

    departures.sort((a, b) => {
      if (table[''.toCamelCase(a.Status)] < table[''.toCamelCase(b.Status)]) {
        return -1;
      } else {
        return 1;
      }
    });

    res.send(departures);
  },

  sortByTrack: (res) => {
    let departuresClone = JSON.parse(JSON.stringify(departures));

    departuresClone.sort((a, b) => {
      if (a.Track > b.Track) {
        return -1;
      } else {
        return 1;
      }
    });
    res.send(departuresClone);
  }
};
