import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';
import Github from '@iconscout/react-unicons/icons/uil-github';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';
import Twitter from '@iconscout/react-unicons/icons/uil-twitter';

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt='wave' style={{width: '100%'}} />
        <div className="f-content">
            <span>anitaisbeta@gmail.com</span>
            <div className="f-icons">
                <Github color='white' size='3rem' />
                <LinkedIn color='white' size='3rem' />
                <Twitter color='white' size='3rem' />
            </div>
        </div>
    </div>
  )
};

export default Footer;
