import React, { Component } from 'react';
import Starship from '../Starship/Starship';
import axios from 'axios';

class Starships extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starshipList: []
    };
  }
  

  componentDidMount = () => {
    console.log('app component mounted');
    this.getStarships('https://swapi.co/api/starships/?format=json');
  }

  getStarships = (url) => {
    axios.get(url)
      .then((response) => {
        this.setState({ 
          starshipList: [
            ...this.state.starshipList,
            ...response.data.results 
          ]
        });
        console.log('response data: ', response.data.results);
        if(response.data.next){
          this.getStarships(response.data.next);
        }
      })
      .catch(error => {
        console.log('error: ', error);   
      });
  }  
  
  render() {
    return (
      <ul>
        {this.state.starshipList.map(starship => {
          return <Starship starship={starship} />
        })}
      </ul>
    );
  }
}

export default Starships;
