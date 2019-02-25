import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Game from './components/Game/Game'
// import Foot from './components/Foot/Foot'
import Jumbo from './components/Jumbo/Jumbo'

class App extends Component {
  state = {
    highScore: 0,
    score: 0,
  };

  render() {
    return (
      <div className="appContainer">
          <Nav
            scoreText="Score: "
            value={this.state.score}
            highScoreText="HighScore: "
            value2={this.state.highScore}
          />
          <Jumbo />
          <Game />
          {/* <Foot /> */}
      </div>
    );
  }
}

export default App;
