import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';

import Menu from './Menu';
import gsap from 'gsap';

const Navbar = ({ }) => {
    return (
        <nav className="navbar container">
            <div className="nav_left">
                <Link to="/" className="logo link">KIKIDENG</Link>
            </div>
            <Menu />
            <div className="nav_right">
                <div className="navbar-menu" >
                    <Link to="projects"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500} className="link">PROJECTS</Link>
                    <Link to="resume"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={700} className="link">RESUME</Link>
                    <Link to="about"
                        spy={true}
                        smooth={true}
                        offset={-500}
                        duration={900} className="link">ABOUT</Link>
                    <a href="/asset/KIKI_DENG_Software_Engineer_CV_KKxDEV@proton_me.pdf" target="_blank"><button className="button button-nav" >WORK WITH ME</button></a>
                </div>
            </div>

        </nav>
    )
}

export default Navbar