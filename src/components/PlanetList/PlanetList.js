import React, { Component } from 'react';
import Planet from '../Planet/Planet';
import axios from 'axios';

class PlanetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planetList: []
    };
  }
  

  componentDidMount = () => {
    console.log('app component mounted');
    this.getPlanets('https://swapi.co/api/planets/?format=json');
  }

  getPlanets = (url) => {
    axios.get(url)
      .then((response) => {
        this.setState({ 
          planetList: [
            ...this.state.planetList,
            ...response.data.results 
          ]
        });
        console.log('response data: ', response.data.results);
        if(response.data.next){
          this.getPlanets(response.data.next);
        }
      })
      .catch(error => {
        console.log('error: ', error);   
      });
  }  
  
  render() {
    return (
      <ul>
        {this.state.planetList.map(planet => {
          return <Planet planet={planet} />
        })}
      </ul>
    );
  }
}

export default PlanetList;
