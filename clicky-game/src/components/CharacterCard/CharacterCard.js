import React, { Component } from 'react';
import { Card } from 'react-materialize';
import './CharacterCard.css';

class CharacterCard extends Component {
    render() {
        return (
            <Card onClick={() => this.props.handleClick(this.props.id)}>
                <div className="imageContainer">
                    <img alt={this.props.image.split('.')[0]} src={this.props.image} />
                </div>
            </Card>
        );
    }
}

export default CharacterCard;
