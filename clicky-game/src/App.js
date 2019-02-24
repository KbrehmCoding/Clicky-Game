import React, { Component } from 'react';
import './App.css';
import Nav from './components/navbar/navbar';
import Game from './components/Game/Game'
import Footer from './components/Footer/Footer'


class App extends Component {
  render() {
    return (
      <div class="appContainer">
          <Nav/>
          <Game />
          <Footer/>

      </div>

    );
  }
}

export default App;
