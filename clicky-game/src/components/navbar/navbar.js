import React, { Component } from 'react';
import './nav.css';
import { Navbar } from 'react-materialize';

class Nav extends Component {
    render() {
        return (
            <Navbar className="Navbar" right fixed>
                <ul>
                    <li className="li" >
                        <li className="li">Clicky Game</li>
                        <li className="li">Click an image to begin!</li>
                    </li>
                    <li className="brand">
                        <li className="li"> Score: 0   Top Score: 0</li>
                    </li>
                </ul>
            </Navbar>
        );
    }
}

export default Nav;
