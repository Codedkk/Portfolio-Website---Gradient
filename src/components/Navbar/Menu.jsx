import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    const handleButtonMail = () => {
        window.open('mailto:recipient@example.com');
    };
    const [navOpen, setNavOpen] = useState(false)

    return (
        <div className="menu">
            <i className="fa-solid fa-ellipsis " onClick={() => setNavOpen(!navOpen)}></i>
            {navOpen &&
                <div className="ham-menu" >
                    <i className="fas fa-times ham-menu-close" onClick={() => setNavOpen(!navOpen)}></i>
                    <Link to="/project" className="link">PROJECTS</Link>
                    <Link to="/project" className="link">RESUME</Link>
                    <Link to="/project" className="link">ABOUT</Link>
                    <button className="button button-ham " onClick={handleButtonMail}>✧ Say HI! ✧</button>
                </div>}

        </div>
    )

}
export default Menu