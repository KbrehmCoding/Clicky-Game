import React, { Component } from 'react';
import './Jumbo.css';

class Jumbo extends Component {
    render() {
        return (
            <div className="Jumbotron">
                <br /><br />
                <h1>Clicky Game!</h1>
                <div><h4>Click on an image to earn points, but don't click on any more than once!</h4></div>
                <div><h4>Once you reach 12 points you win!</h4></div>
            </div>
        );
    }
}

export default Jumbo;
