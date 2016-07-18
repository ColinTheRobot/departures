const React = require('react');
const NavItem = require('./nav_item.js');

const Nav = React.createClass({
  render: function () {
    return (
      <nav>
        <ul>
          <NavItem reorg={this.props.reorg} id="status" item="Status" />
          <NavItem reorg={this.props.reorg} id="late" item="Late Trains" />
          <NavItem reorg={this.props.reorg} id="track" item="Track" />
        </ul>
      </nav>
    );
  }
});

module.exports = Nav;
