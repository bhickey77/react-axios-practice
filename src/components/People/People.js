import React, { Component } from 'react';
import Person from '../Person/Person';
import axios from 'axios';

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personList: []
    };
  }
  

  componentDidMount = () => {
    console.log('app component mounted');
    this.getPeople('https://swapi.co/api/people/?format=json');
  }

  getPeople = (url) => {
    axios.get(url)
      .then((response) => {
        this.setState({ 
          personList: [
            ...this.state.personList,
            ...response.data.results 
          ]
        });
        console.log('response data: ', response.data.results);
        if(response.data.next){
          this.getPeople(response.data.next);
        }
      })
      .catch(error => {
        console.log('error: ', error);   
      });
  }  
  
  render() {
    return (
      <ul>
        {this.state.personList.map(person => {
          return <Person person={person} />
        })}
      </ul>
    );
  }
}

export default People;
