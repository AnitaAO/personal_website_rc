import React from 'react';
import './Card.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Card = ({emoji, heading, details}) => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode

  return (
    <div 
      className="card"
      style={{left: '14rem'}}
      // style={{justifyContent: 'center'}}
    >
        <img src={emoji} alt='emoji'/>
        <span>{heading}</span>
        <span style={{color: darkMode? '#fbfafa': ''}}>{details}</span>
        <button className="c-button">LEARN MORE</button>
    </div>
  )
}

export default Card;
