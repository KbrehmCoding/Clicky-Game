import React, { Component } from 'react';
import './Game.css';
import CharacterCard from '../CharacterCard/CharacterCard';
import characters from '../../cards.json';

class Game extends Component {
    state = {
        characters,
        clickedList: [],
        highScore: 0,
        score: 0,
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
        const { clickedList, highScore, score } = this.state;
        const isClicked = clickedList.includes(id);

        if (isClicked) {
            this.setState({
                clickedList: [],
                highScore: (score > highScore ? score : highScore),
                score: 0,
            });
        } else {
            this.setState({
                clickedList: [...clickedList, id],
                score: score + 1,
            });
        }

        this.shuffleCharacters();
    }

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
