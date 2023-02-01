import React from 'react';
import "./Intro.css";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import LinkedIn from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesemoji from "../../img/glassesimoji.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
        <div className="i-name">
                <span>Hey! I am</span>
                <span>Amarachi Ajah</span>
                <span>
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
            <img src={Boy} alt='vector' />
            <img src={Glassesemoji} alt='emoji' />
            <div style={{top: '-5%', left: '58%'}}>
                <FloatingDiv 
                image={Crown}
                txt1 = {'Web'}
                txt2 = {'Development'} 
                />
            </div>            
            <div style={{bottom: '18%', right: '63%'}}>
                <FloatingDiv 
                image={Thumbup}
                txt1 = {'UI/UX'}
                txt2 = {'Design'} 
                />
            </div>
            {/*blur divs*/}
            <div className='blur' style={{background: 'rgb(238 210 255)'}}></div>
            <div className='blur' style={{background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
        </div>
    </div>
  )
};

export default Intro;
