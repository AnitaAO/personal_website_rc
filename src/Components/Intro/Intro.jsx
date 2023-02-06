import React from 'react';
import "./Intro.css";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import LinkedIn from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Me from "../../img/me.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
// import Glassesemoji from "../../img/glassesimoji.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Intro = () => {

    const transition = {duration: 2, type: 'spring'};

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
        <div className="i-name">
                <span style={{color: darkMode? 'white': ''}} >Hey! I am</span>
                <span>Amarachi Ajah</span>
                <span style={{color: darkMode? '#fbfafa': ''}}>
                    I specialise in digital product design and 
                    front-end web development. I am a multidisciplinary 
                    and talented Nigerian based in Lagos. I am passionate 
                    about helping you turn your dreams and ideas into 
                    reality; using quality images to tell beautiful stories.
                </span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <a href='https://www.github.com/AnitaAO'>
                    <img src={Github} alt='github'/>
                </a>
                <a href='https://www.linkedin.com'>
                    <img src={LinkedIn} alt='linkedin'/>
                </a>
                <a href='https://www.instagram.com'>
                    <img src={Instagram} alt='instagram'/>
                </a>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt='vector' />
            <img src={Vector2} alt='vector' />
            <img src={Me} alt='vector' />
            <motion.img
                initial={{left: '-36%'}} 
                whileInView={{left: '-24%'}}
                whileHover={{left: '-30%'}}
                transition={transition}
                // src={Glassesemoji} alt='emoji' 
            />
            <motion.div
                className='floating-div' 
                initial={{top: '73%', left: '48%'}}
                whileInView={{left: '58%'}}
                transition={transition} 
                style={{top: '73%', left: '58%'}}>
                <FloatingDiv 
                    image={Crown}
                    txt1 = {'Web'}
                    txt2 = {'Development'} />
            </motion.div>            
            <motion.div 
                className='floating-div'
                initial={{left: '9rem', top: '18rem'}}
                whileInView={{left: '0rem'}}
                transition={transition}
                style={{bottom: '18%', right: '63%'}}>
                <FloatingDiv 
                image={Thumbup}
                txt1 = {'UI/UX'}
                txt2 = {'Design'} 
                />
            </motion.div>
            {/*blur divs*/}
            <div className='blur' style={{background: 'rgb(238 210 255)'}}></div>
            <div className='blur' style={{background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
        </div>
    </div>
  )
};

export default Intro;
