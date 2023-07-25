import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)
    return (
        <nav className="navbar container">
            <div className="nav_left">
                <Link to="/" className="logo link">KOliGREEN</Link>
            </div>
            <div className="nav_right">
                <div className="nav_right-s" >
                    <Link to="/project" className="link">PROJECTS</Link>
                    <Link to="/project" className="link">RESUME</Link>
                    <Link to="/project" className="link">ABOUT</Link>
                    <button className="button button-nav">✧ Say HI! ✧</button>
                </div>

                <div className="nav_right-xxs">
                    <i className="fa-solid fa-ellipsis" onClick={() => setNavOpen(!navOpen)}></i>
                    {navOpen && <div className="ham-menu">
                        <i className="fas fa-times ham-menu-close" onClick={() => setNavOpen(!navOpen)}></i>
                        <button className="button button_resume">GET MY RESUME</button>
                        <button className="button button_hi">SAY HI</button>
                    </div>}
                </div>
            </div>

        </nav>
    )
}

export default Navbar