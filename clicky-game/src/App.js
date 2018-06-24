import React, { Component } from 'react';
import { Row, CardPanel, Col } from 'react-materialize';
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
            <div>
                <nav className="pinned">
                    <div className="nav-wrapper">
                        <span className="brand-logo">Clicky Game</span>
                        <ul className="right">
                            <li>Click an image to begin</li>
                            <li>Score: {this.state.score} | High Score: {this.state.highScore}</li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <Row>
                        <Col s={12}>
                            <CardPanel>
                                <p>Click on an image to earn points, but don't click on any more than once!</p>
                            </CardPanel>
                        </Col>
                    </Row>
                    <Row>
                        {this.state.icons.map(icon => <GamePiece key={icon.iconName} icon={icon} clickHandler={this.clickHandler} />)}
                    </Row>
                </div>
            </div>
        )
    }
}

export default App;
