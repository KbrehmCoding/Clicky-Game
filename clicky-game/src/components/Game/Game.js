import React, { Component } from 'react';
import './Game.css';
import CharacterCard from '../CharacterCard/CharacterCard';
import characters from '../../cards.json';

class Game extends Component {
    state = {
        characters,
    };

    shuffleCharacters = () => {
        let newCharacters = this.state.characters.slice(0);
        for (let i = newCharacters.length - 1; i > 0; i--) {
            const k = Math.floor(Math.random() * (i + 1));
            const temp = newCharacters[i];
            newCharacters[i] = newCharacters[k];
            newCharacters[k] = temp;
        }
        this.setState({ characters: newCharacters });
    };

    handleClick = id => {
        this.props.onCharacterClick(id);
        this.shuffleCharacters();
    };

    render() {
        return (
            <div className="gameContainer">
                { this.state.characters.map(character => (
                    <CharacterCard
                        name={character.name}
                        image={character.image}
                        key={character.id}
                        id={character.id}
                        handleClick={this.handleClick}
                        shuffle={this.shuffle}
                    />
                ))}
            </div>
        );
    }
}

export default Game;
