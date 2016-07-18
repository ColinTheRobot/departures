const React = require('react');
const DeparturesRow = require('./departures_row.js');

const SplitFlap = React.createClass({
  renderDepartureRows: function (key) {
    return <DeparturesRow key={key} departure={this.props.departures[key]}/>;
  },

  render: function () {
    let departures = this.props.departures;

    return (
      <div className="split-flap">
        <div className='headers'>
          <div className='header-cells'>Departure Time</div>
          <div className='header-cells'>Origin</div>
          <div className='header-cells'>Destination</div>
          <div className='header-cells'>Status</div>
          <div className='header-cells'>Lateness</div>
          <div className='header-cells'>Track</div>
        </div>

        {
          Object.keys(departures).map(this.renderDepartureRows)
        }

      </div>
    );
  }
});

module.exports = SplitFlap;
