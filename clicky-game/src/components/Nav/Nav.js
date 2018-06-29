import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {
    componentWillUnmount() {
        window.clearTimeout(this.timeout)
    }

    renderMessage(correct, clear = false) {
        let message, className
        if (correct === undefined) {
            message = 'Click an image to begin'
            className = ''
        } else {
            message = correct ? 'You guessed correctly!' : 'You guessed incorrectly'
            className = correct ? 'correct' : 'incorrect'
        }

        if (!clear) {
            window.clearTimeout(this.timeout)
            this.timeout = window.setTimeout(this.renderMessage, [correct, true], 1000)
        }
        return <li key={Math.random()} className={className}>{message}</li>
    }

    render() {
        return (
            <nav className="pinned">
                <div>
                    <ul className="center navList">
                        <li className="logo">Clicky Game</li>
                        {this.renderMessage(this.props.correct)}
                        <li>Score: {this.props.score} | High Score: {this.props.highScore}</li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Nav