import React from 'react';
import './Works.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';

const Works = () => {
  return (
    <div className="works">
        {/* this is left side */}
        <div className='awesome w-left'>
            <span>Worked for all these</span>
            <span>Brands & Clients</span>
            <span>
                I and a team of others built a Retail Managemnet 
                System using React, Typescript, Material UI 
                and Python for the backend for Prunedge Technolodies
                <br /> <br />
                I, along a team of 4 frontend developers, 
                built a loan App for Stanbic IBTC using 
                Angular, Typescript, Material UI and C# 
                for the backend for Prunedge Technolodies.
                <br /> <br />
                I and a team of others built a movie rating 
                and rewiew App using NextJs, Typescript, 
                Angular for the admin dashbord, Material UI 
                and NodeJs for the backend for Developers Cycle.
                <br /> <br />
                I built a church app using Angular and Tailwind 
                for PharezTech Limited.
                <br /> <br />

            </span>
            <button className="button s-button">Hire me</button>
            <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
        </div>

        {/* the right side */}
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt=''/>
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt='fiverr'/>
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt='amazon'/>
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt='shopify'/>
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt='facebook'/>
                </div>
            </div>
            {/* the background circles */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Works;

