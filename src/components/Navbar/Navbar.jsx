import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Navbar = () => {
    return (
        <nav className="navbar container">
            <div className="nav_left">
                <Link to="/" className="logo link">KOliGREEN</Link>
            </div>
            <Menu />
            <div className="nav_right">
                <div className="navbar-menu">
                    <Link to="/project" className="link">PROJECTS</Link>
                    <Link to="/project" className="link">RESUME</Link>
                    <Link to="/project" className="link">ABOUT</Link>
                    <button className="button button-nav">WORK WITH ME</button>
                </div>
            </div>

        </nav>
    )
}

export default Navbar