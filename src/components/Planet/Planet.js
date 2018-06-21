import React, { Component } from 'react';
import axios from 'axios';

class Planet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <li>
            <div>{this.props.planet.name}</div>
            <div>{this.props.planet.climate}</div>
        </li>
    );
  }
}

export default Planet;
