import React, { Component } from 'react';
import './App.css';
import Nav from './components/navbar/navbar';
import Game from './components/Game/Game'
import Foot from './components/Footer/Footer'
import Jumbo from './components/Jumbotron/jumbotron'

class App extends Component {
  render() {
    return (
      <div class="appContainer">
          <Nav />
          <Jumbo />
          <Game />
          <Foot />
      </div>
    );
  }
}

export default App;
