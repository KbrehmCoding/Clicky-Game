import React, { Component } from 'react';
import './Footer.css';
import { Footer } from 'react-materialize'

class Foot extends Component {
    render() {
        return (
            <Footer className="Footer" copyrights="&copy 2019 Copyright Text">
                <h5 className="white-text"> I hope you enjoy the game!!!</h5>
            </Footer>
        )
    }
}

export default Foot;