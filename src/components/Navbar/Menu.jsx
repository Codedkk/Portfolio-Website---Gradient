import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Menu = () => {
    const handleButtonMail = () => {
        window.open('mailto:KKxDEV@proton.me');
    };
    const [navOpen, setNavOpen] = useState(false)

    return (
        <section className="menu">
            <i className="fa-solid fa-ellipsis " onClick={() => setNavOpen(!navOpen)}></i>
            {navOpen &&
                <div className="ham-menu" >
                    <i className="fas fa-times ham-menu-close" onClick={() => setNavOpen(!navOpen)}></i>
                    <div className="ham-title">Let's connect at</div>
                    <div className="ham-mail">KKxDEV@proton.me</div>
                    <div className="about_social" >
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="about_social_icon">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="about_social_icon" onClick={handleButtonMail}>
                            <i className="fa-regular fa-envelope"></i>
                        </a>
                        <div className="about_social_icon" >
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                    <button className="button button-ham " onClick={handleButtonMail}>✧ Say HI! ✧</button>
                </div>}

        </section>
    )

}
export default Menu