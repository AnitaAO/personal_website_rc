import React from "react";
import './Services.css';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import HeartEmoji from '../../img/heartemoji.png'
import Card from "../Card/Card";
import Resume from './resume.pdf'

const Services = () => {
    return(
        <div className='services'>
            {/*left-side*/}
            <div className='awesome'>
                <span>My Awesome</span>
                <span>Services</span>
                <span>I help product owners achieve their
                    <br /> 
                    dreams!
                </span>
                <a href={Resume} download>
                <button className="button s-button">Download</button>
                </a>
                <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
            </div>
            {/*right-side*/}
            <div className='cards'>
                {/* first card */}
                <div style={{left: '14rem'}}>
                    <Card 
                        emoji = {HeartEmoji}
                        heading = {'Design'}
                        details = {'Figma, Photoshop, Canva'}
                    />
                </div>
                {/* second card */}
                <div style={{top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        details={'Html, CSS, JavaScript, Typescript, Tailwind, Material UI, Angular, React, NextJs'}
                    />
                </div>

                {/* third card */}
                <div style={{top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        details={'Brand system, Design system, Research, User-journeys, IA, Wireframes, Prototyping'}
                    />
                </div>
                <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
            </div>
        </div>
    )
};

export default Services
