import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Planets from '../Planets/Planets'
import './App.css';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

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
