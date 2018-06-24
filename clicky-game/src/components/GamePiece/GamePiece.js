import React from 'react'
import { Col, CardPanel } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './GamePiece.css'

const GamePiece = props => (
    <Col s={12} m={3}>
        <CardPanel onClick={() => props.clickHandler(props.icon.iconName)} className="hoverable teal lighten-4 black-text center">
            <FontAwesomeIcon icon={props.icon} />
        </CardPanel>
    </Col>
)

export default GamePiece
