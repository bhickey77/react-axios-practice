import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import PlanetList from '../PlanetList/PlanetList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PlanetList />
      </div>
    );
  }
}

export default App;
