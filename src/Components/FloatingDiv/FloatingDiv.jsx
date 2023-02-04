import React from 'react';
import "./Floating.css";
import { themeContext } from '../../Context';
import { useContext } from 'react';

const FloatingDiv = ({image, txt1, txt2}) => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="floatingdiv"
    >
        <img src={image} alt='crown'/>
        <div style={{color: darkMode? '#282424' : ''}}        >
            <span>{txt1}</span>
            <br/>
            <span>{txt2}</span>
        </div>
    </div> 
 )
}

export default FloatingDiv;
