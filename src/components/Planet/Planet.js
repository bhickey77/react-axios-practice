import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class Planet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (    
      <Router>
        <li>
            <div>{this.props.planet.name}</div>
            <div>{this.props.planet.climate}</div>
            <div>{this.props.planet.diameter}</div>
          </a>
        </li>
      </Router>
    );
  }
}

export default Planet;
