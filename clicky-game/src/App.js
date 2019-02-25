import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Game from './components/Game/Game'
// import Foot from './components/Foot/Foot'
import Jumbo from './components/Jumbo/Jumbo'

class App extends Component {
  render() {
    return (
      <div className="appContainer">
          <Nav />
          <Jumbo />
          <Game />
          {/* <Foot /> */}
      </div>
    );
  }
}

export default App;
