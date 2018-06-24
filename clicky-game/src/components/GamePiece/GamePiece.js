import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './GamePiece.css'

const GamePiece = props => (
    <span onClick={() => props.clickHandler(props.icon.iconName)}>
        <FontAwesomeIcon icon={props.icon}/>
    </span>
)

export default GamePiece
