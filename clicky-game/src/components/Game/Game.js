
import React, {Component} from 'react';
// import cardData from '../../cards.json';
import card from './cards';
class Game extends Component {
    render() {
        return (
            <div>
                <card />
                <card />
                <card />
                <card />
            </div>
        )
    }
}

shuffleiIt = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

export default Game;