import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Game from './components/Game/Game'
import Jumbo from './components/Jumbo/Jumbo'

class App extends Component {
  state = {
    clickedList: [],
    highScore: 0,
    score: 0,
  };

  onCharacterClick = id => {
    const { clickedList } = this.state;

    if (clickedList.includes(id)) {
        this.setState({
            clickedList: [],
            highScore: this.state.score > this.state.highScore ? this.state.score : this.state.highScore,
            score: 0,
        });
    } else {
        this.setState({
            clickedList: [...clickedList, id],
            score: this.state.score + 1,
        });
    }
}

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
          <Game onCharacterClick={this.onCharacterClick} />
      </div>
    );
  }
}

export default App;
