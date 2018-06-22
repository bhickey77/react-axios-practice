import React, { Component } from 'react';
import axios from 'axios';

class Starship extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <li>
            <div>{this.props.starship.name}</div>
            <div>{this.props.starship.climate}</div>
            <div>{this.props.starship.diameter}</div>
        </li>
    );
  }
}

export default Starship;
