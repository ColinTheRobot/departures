'use strict'
const React = require('react');
const Nav = require('./nav.js');

const Header = React.createClass({
  render: function () {
    return (
      <div className="header">
        <img src="images/MBTA.png" />
        <h1 onClick={this.props.reset}> MBTA Departures</h1>
        <Nav reorg={this.props.reorg} />
      </div>
    );
  }
});

module.exports = Header;
