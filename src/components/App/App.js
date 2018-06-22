import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Planets from '../Planets/Planets';
import People from '../People/People';
import Starships from '../Starships/Starships';
import './App.css';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {
  constructor(){
    super()
    this.state = {
      hi: 'sadfhihihi'
    }

  }
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/people'>People</Link></li>
              <li><Link to='/planets'>Planets</Link></li>
              <li><Link to='/starships'>Starships</Link></li>
            </ul>
          </nav>
          <main>
            <Route exact path='/planets' component={Planets} />
            <Route exact path='/people' component={People} />
            <Route exact path='/starships' component={Starships} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
