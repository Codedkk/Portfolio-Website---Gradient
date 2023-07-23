import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)
    return (
        <div className="navbar">
            <div className="nav_left">
                <Link to="/" className="logo link">KOliGREEN</Link>
            </div>
            <div className="nav_right">
                {/* <div className="nav_right-m"></div> */}
                <div className="nav_right-xxs">
                    <i className="fa-solid fa-ellipsis" onClick={() => setNavOpen(!navOpen)}></i>
                    {navOpen && <div className="ham-menu">
                        <i className="fas fa-times ham-menu-close" onClick={() => setNavOpen(!navOpen)}></i>
                        <button className="button button_resume">GET MY RESUME</button>
                        <button className="button button_hi">SAY HI</button>
                    </div>}
                </div>
            </div>

        </div>
    )
}

export default Navbar