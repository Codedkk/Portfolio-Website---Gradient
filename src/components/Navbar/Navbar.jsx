import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import gsap from 'gsap';

const Navbar = ({ }) => {
    // let timeline = gsap.timeline();
    // let logo = useRef(null);
    // let menu_items = useRef(null);

    // useEffect(() => {
    //     timeline.from(logo, {
    //         delay: 1,
    //         duration: .5,
    //         opacity: 0,
    //         y: 100
    //     })
    //     timeline.from(menu_items, {
    //         duration: .7,
    //         opacity: 0,
    //         y: 100
    //     })
    // }, [])

    //TODO
    const handleButtonDownload = () => {
        window.location.href = 'https://example.com/path/to/pdf';
    };

    return (
        <nav className="navbar container">
            <div className="nav_left">
                <Link to="/" className="logo link">KOliGREEN</Link>
            </div>
            <Menu />
            <div className="nav_right">
                <div className="navbar-menu" >
                    <Link to="/project" className="link">PROJECTS</Link>
                    <Link to="/project" className="link">RESUME</Link>
                    <Link to="/project" className="link">ABOUT</Link>
                    <button className="button button-nav" onClick={handleButtonDownload}>WORK WITH ME</button>
                </div>
            </div>

        </nav>
    )
}

export default Navbar