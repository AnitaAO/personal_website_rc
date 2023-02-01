import React from 'react';
import './Card.css'

const Card = ({emoji, heading, details}) => {
  return (
    <div 
      className="card"
      style={{left: '14rem'}}
    >
        <img src={emoji} alt='emoji'/>
        <span>{heading}</span>
        <span>{details}</span>
        <button className="c-button">LEARN MORE</button>
    </div>
  )
}

export default Card;
