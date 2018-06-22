import React, { Component } from 'react';
class Person extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <li>
            <div>{this.props.person.name}</div>
            <div>{this.props.person.climate}</div>
            <div>{this.props.person.diameter}</div>
        </li>
    );
  }
}

export default Person;
