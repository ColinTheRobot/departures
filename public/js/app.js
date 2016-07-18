'use strict'
const $ = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');

const Header = require('./header.js');
const SplitFlap = require('./split_flap.js');

const App = React.createClass({
  getInitialState: function () {
    return {
      departures: [],
    };
  },

  componentDidMount: function () {
    this.getDepartures = $.get('/departures', (data) => {
      this.setState({
        departures: data
      });
    });
  },

  reset: function () {
    this.getDepartures = $.get('/departures', (data) => {
      this.setState({
        departures: data
      });
    });
  },

  reorg: function (sortBy) {
    $.get(`/departures?q=${sortBy}`)
      .done((data) => {
        this.setState({
          departures: data
        });
      });
    },

  render: function () {
    return (
      <div className="inner-container">
         <Header reset={this.reset} reorg={this.reorg}/>
         <SplitFlap departures={this.state.departures} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('container'));
