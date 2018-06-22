import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class Planet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (    
      <Router>
        <li>
            <div>{this.props.planet.name}</div>
            <div>{this.props.planet.climate}</div>
            <div>{this.props.planet.diameter}</div>
        </li>
      </Router>
    );
  }
}

export default Planet;
