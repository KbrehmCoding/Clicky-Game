
import React, {Component} from 'react';
import cardData from '../../cards.json';
import './cards.css';

class card extends Component {
    render() {
        return (
            <div className="card-border">
                <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
            </div>
        )
    }
}



export default card;