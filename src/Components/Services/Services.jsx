import React from "react";
import './Services.css';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import HeartEmoji from '../../img/heartemoji.png'
import Card from "../Card/Card";
import Resume from './resume.pdf';
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Services = () => {

    const transition = {duration: 1, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return(
        <div className='services' id="Services">
            {/*left-side*/}
            <div className='awesome' style={{justifyContent: 'center'}}>
                <span style={{color: darkMode? 'white': ''}} >
                    My Awesome
                </span>
                <span>Services</span>
                <span
                    style={{color: darkMode? '#fbfafa': ''}}
                >
                    I help product owners achieve their
                    {/* <br />  */}
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
                <motion.div
                    className="motion-div" 
                    whileInView={{left: '12rem'}}
                    initial={{left: '14%'}}
                    transition={transition}
                    style={{left: '14rem'}}
                >
                    <Card 
                        emoji = {HeartEmoji}
                        heading = {'Design'}
                        details = {'Figma, Photoshop, Canva, Illustrator' }
                    />
                </motion.div>
                {/* second card */}
                <motion.div 
                    className="motion-div"
                    initial={{left: '-5rem', top: '15rem'}}
                    whileInView={{left: '12rem', top: '16rem'}}
                    transition={transition}
                    style={{top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        details={'Html, CSS, JavaScript, Typescript, Tailwind, Material UI, Angular, React, NextJs'}
                    />
                </motion.div>

                {/* third card */}
                <motion.div
                    className="motion-div" 
                    initial={{left: '12rem'}}
                    whileInView={{left: '0rem'}}
                    transition={transition}
                    style={{top: '10rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        details={'Brand system, Design system, Research, User-journeys, IA, Wireframes, Prototyping'}
                    />
                </motion.div>
                <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
            </div>
        </div>
    )
};

export default Services
