import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)
    return (
        <div className="navbar">
            <div className="nav_left">
                <Link to="/" className="logo link">lKKlGREEN</Link>
            </div>
            <div className="nav_right">
                {/* <div className="nav_right-m"></div> */}
                <div className="nav_right-xxs">
                    {!navOpen ? <i className="fa-solid fa-ellipsis" onClick={() => setNavOpen(!navOpen)}></i> :
                        <i className="fas fa-times" onClick={() => setNavOpen(!navOpen)}></i>}

                    {navOpen && <div className="ham-menu">
                        <button className="button button_resume">GET MY RESUME</button>
                        <button className="button button_hi">SAY HI</button>
                    </div>}
                </div>
            </div>

        </div>
    )
}

export default Navbar