import React, { Component } from 'react';
import './Nav.css';
import { Navbar } from 'react-materialize';

class Nav extends Component {
    render() {
        return (
            <Navbar className="Navbar" right fixed>
                <ul>
                    <li className="li">Clicky Game</li>
                    <li className="li">Click an image to begin!</li>
                    <li className="Score">{`${this.props.scoreText} ${this.props.value}`}</li>
                    <li className="HighScore">{`${this.props.highScoreText} ${this.props.value2}`}</li>
                </ul>
            </Navbar>
        );
    }
}

export default Nav;
