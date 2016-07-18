const React = require('react');
const moment = require('moment');
moment().format();

const DeparturesRow = React.createClass({
  setStatusClass: function (departure) {
    if (departure.Status == 'Now Boarding') {
      return 'boarding';
    } else if (departure.Status == 'Late') {
      return 'late';
    } else {
      return '';
    }
  },

  render: function () {
    let departure = this.props.departure;
    let parsedTime = moment(departure.ScheduledTime).format('h:mm:ss a');
    let status = this.setStatusClass(departure);
    let humanizedLateness = moment.duration(departure.Lateness, 'minutes').humanize();

    return (
      <div className={`departure-row ${status}`}>
          <div className="cell-style">{parsedTime}</div>
          <div className="cell-style">{departure.Origin}</div>
          <div className="cell-style">{departure.Destination}</div>
          <div className="cell-style">{departure.Status}</div>
          <div className="cell-style">{departure.Lateness ? humanizedLateness : 'On Time'}</div>
          <div className="cell-style">{departure.Track || '--'}</div>
      </div>
    );
  }
});

module.exports = DeparturesRow;
