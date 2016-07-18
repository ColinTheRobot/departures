'use strict'
const $ = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createClass({
  getInitialState : function() {
    return {
      departures: [],
    };
  },

  componentDidMount : function() {
    this.getDepartures = $.get('/departures', (data) => {
      this.setState({
        departures: data
      })
    })
  },

  reorg: function(sortBy) {
    $.get(`/departures?q=${sortBy}`)
      .done( (data) => {
        this.setState({ data: data })
      })
    },


  render: function() {
    return (
      <div>
         <Header />
         <Nav />
         <SplitFlap departures={this.state.departures} />
      </div>
    )
  }
})

const Header = React.createClass({
  render: function() {
    return (
      <div>
        <h1>MBTA Departures</h1>
      </div>
    )
  }
})

const Nav = React.createClass({


  render: function() {
    return (
      <nav>
        <ul>
          <NavItems item="Scheduled Time" />
          <NavItems item="Lateness" />
          <NavItems item="Track" />
          <NavItems item="Status" />
        </ul>
      </nav>
    )
  }
})

const NavItems = React.createClass({

  reorg : function(event) {
    console.log(this)
  },

  render: function() {
    return (
      <li className='nav' onClick={this.reorg}>{this.props.item}</li>
    )
  }
})

const SplitFlap = React.createClass({
  renderDepartureRows : function(key) {
    return <DeparturesRow key={key} departure={this.props.departures[key]}/>
  },

  render : function() {
    let departures = this.props.departures

    return (
      <div>
        <div className='headers'>
          <div className='header-cells'>Departure Time</div>
          <div className='header-cells'>Origin</div>
          <div className='header-cells'>Destination</div>
          <div className='header-cells'>Status</div>
          <div className='header-cells'>Lateness: </div>
          <div className='header-cells'>Track</div>
        </div>

        {
          Object.keys(departures).map(this.renderDepartureRows)
        }

      </div>
    )
  }
})

const DeparturesRow = React.createClass({


  render : function() {
    let departure = this.props.departure

    return (
      <div className="departure-row">
          <div className="cell-style">{departure.ScheduledTime}</div>
          <div className="cell-style">{departure.Origin}</div>
          <div className="cell-style">{departure.Destination}</div>
          <div className="cell-style">{departure.Status} </div>
          <div className="cell-style">{departure.Lateness || 'On Time'}</div>
          <div className="cell-style">{departure.Track || '--'}</div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('container'))
