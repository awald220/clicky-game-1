import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './GamePiece.css'

const GamePiece = props => (
    <FontAwesomeIcon icon={props.icon} onClick={props.clickHandler} />
)

export default GamePiece
