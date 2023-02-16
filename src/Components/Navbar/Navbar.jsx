import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Amarachi</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <Link spy={true} smooth={true} to='Navbar' activeClass='activeClass' offset={50} duration={500}> 
                            <li>Home</li>
                        </Link> 
                        <Link spy={true} smooth={true} to='Services' offset={50} duration={500} >
                            <li>Services</li>
                        </Link> 
                        <Link spy={true} smooth={true} to='Experience' offset={50} duration={500} >
                            <li>Experience</li>
                        </Link> 
                        <Link spy={true} smooth={true} to='Portfolio' offset={50} duration={500} >
                            <li>Portfolio</li>
                        </Link> 
                        <Link spy={true} smooth={true} to='Testimonials' offset={50} duration={500} >
                            <li>Testimonials</li>
                        </Link>
                    </ul>
                </div>
                <Link spy={true} smooth={true} to='Contact' offset={50} duration={500}>
                    <button className="button n-button">Contact</button>
                </Link>
            </div>
        </div>
    )
};

export default Navbar;
