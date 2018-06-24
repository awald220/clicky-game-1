import React, { Component } from 'react';
import './App.css';
import { faSmile, faFrown, faBell, faCalendar, faEnvelope, faEnvelopeOpen, faNewspaper, faSnowflake, faBellSlash, faCompass, faEye, faFileAlt } from '@fortawesome/free-regular-svg-icons'
import GamePiece from './components/GamePiece';

class App extends Component {
    state = {
        icons: [faSmile, faFrown, faBell, faCalendar, faEnvelope, faEnvelopeOpen, faNewspaper, faSnowflake, faBellSlash, faCompass, faEye, faFileAlt].sort(this.randomize),
        clicked: [],
        score: 0,
        highScore: 0
    }

    randomize = (a, b) => Math.random() > .5 ? -1 : 1

    clickHandler = iconName => {
        if (this.state.clicked.indexOf(iconName) === -1) {
            let score = this.state.score + 1

            this.setState({
                icons: this.state.icons.sort(this.randomize),
                clicked: [...this.state.clicked, iconName],
                score: score,
                highScore: Math.max(this.state.highScore, score)
            })
            if (score === this.state.icons.length) {
                // game has been won
            }
        } else {
            this.setState({
                icons: this.state.icons.sort(this.randomize),
                clicked: [],
                score: 0
            })
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Clicky Game</h1>
                    <h2>Score: {this.state.score}</h2>
                    <h2>High Score: {this.state.highScore}</h2>
                </header>
                <p className="App-intro">
                    {this.state.icons.map(icon => <GamePiece key={icon.iconName} icon={icon} clickHandler={this.clickHandler} />)}
                </p>
            </div>
        )
    }
}

export default App;
