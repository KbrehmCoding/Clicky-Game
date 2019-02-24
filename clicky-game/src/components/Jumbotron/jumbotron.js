import React, { Component } from 'react';
import './jumbotron.css';

class Jumbo extends Component {
    render() {
        return (
            <div className="Jumbotron">
                <br></br>
                <h1>Clicky Game!</h1>
                <div><h4>Click on an image to earn points, but don't click on any more than once!</h4></div>
            </div>
        );
    }
}

export default Jumbo;
