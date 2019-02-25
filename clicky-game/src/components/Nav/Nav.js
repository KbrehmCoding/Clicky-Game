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
                    {/*<li className="li">
                        <h2>{`${this.props.primaryHeadingText} ${this.props.primaryHeadingValue}`}</h2>
                        <h2>{`${this.props.secondaryHeadingText} ${this.props.secondaryHeadingValue}`}</h2>
                    </li>*/}
                </ul>
            </Navbar>
        );
    }
}

export default Nav;
