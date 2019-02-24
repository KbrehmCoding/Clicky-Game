import React, { Component } from 'react';
import './nav.css';
import { Navbar } from 'react-materialize';

class Nav extends Component {
    render() {
        return (
            <Navbar className="Navbar" right fixed>
                <ul>
                    <li className="li">Clicky Game</li>
                    <li className="li">Click an image to begin!</li>
                    <li className="li"> Score: 0   Top Score: 0</li>
                </ul>
            </Navbar>
        );
    }
}

export default Nav;
