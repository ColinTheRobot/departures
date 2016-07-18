'use strict'
const React = require('react');

const NavItem = React.createClass({
  reorg: function (event) {
    this.props.reorg(event.target.id);
  },

  render: function () {
    return (
      <li className='nav' id={this.props.id} onClick={this.reorg}> {this.props.item}</li>
    );
  }
});

module.exports = NavItem;
