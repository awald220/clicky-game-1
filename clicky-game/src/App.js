import React, { Component } from 'react';
import { Row, CardPanel, Col } from 'react-materialize';
import { faSmile, faFrown, faBell, faCalendar, faEnvelope, faEnvelopeOpen, faNewspaper, faSnowflake, faBellSlash, faCompass, faEye, faFileAlt } from '@fortawesome/free-regular-svg-icons'
import GamePiece from './components/GamePiece';
import Nav from './components/Nav/Nav';

class App extends Component {
    state = {
        icons: [faSmile, faFrown, faBell, faCalendar, faEnvelope, faEnvelopeOpen, faNewspaper, faSnowflake, faBellSlash, faCompass, faEye, faFileAlt].sort(this.randomize),
        clicked: [],
        score: 0,
        highScore: 0,
        correct: undefined,
    }

    randomize = (a, b) => Math.random() > .5 ? -1 : 1

    clickHandler = iconName => {
        if (this.state.clicked.indexOf(iconName) === -1) {
            let score = this.state.score + 1

            this.setState({
                icons: this.state.icons.sort(this.randomize),
                clicked: [...this.state.clicked, iconName],
                score: score,
                highScore: Math.max(this.state.highScore, score),
                correct: true
            })
            if (score === this.state.icons.length) {
                // game has been won
            }
        } else {
            this.setState({
                icons: this.state.icons.sort(this.randomize),
                clicked: [],
                score: 0,
                correct: false
            })
        }
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Nav correct={this.state.correct} score={this.state.score} highScore={this.state.highScore} />
                    <Row>
                        <Col s={12}>
                            <CardPanel>
                                <p>Click on an image to earn points, but don't click on any more than once!</p>
                            </CardPanel>
                        </Col>
                    </Row>
                </div>
                <div className="container">
                    <Row>
                        {this.state.icons.map(icon => <GamePiece correct={this.state.correct} key={icon.iconName} icon={icon} clickHandler={this.clickHandler} />)}
                    </Row>
                </div>
            </div>
        )
    }
}

export default App
