import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {

    const handleButtonMail = () => {
        window.open('mailto:KK_DEV@outlook.com');
    };
    const handleLinkedin = () => {
        const url = "https://https://www.linkedin.com/in/kiki-deng-b68695291/";
        window.open(url, "_blank");
    };
    const handleGithub = () => {
        const url = "https://github.com/KKDEVE";
        window.open(url, "_blank");
    };


    return (
        <>
            <footer className="footer container" >
                <div className="footer-content">
                    <div className="footer-nav">
                        <Link to="projects"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500} className="link">PROJECTS</Link>
                        <Link to="resume"
                            spy={true}
                            smooth={true}
                            offset={-200}
                            duration={700} className="link">RESUME</Link>
                        <Link to="about"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={900} className="link">ABOUT</Link>
                    </div>
                    <div className="footer-icons">
                        <img src="/asset/img/icon/github.svg" alt="" onClick={handleGithub} />
                        <img src="/asset/img/icon/mail.svg" alt="" onClick={handleButtonMail} />
                        <img src="/asset/img/icon/linkedin.svg" alt="" onClick={handleLinkedin} />


                    </div>

                    <div className="footer-by">
                        Developed and Designed By <span className="logo">KIKIDENG</span>
                    </div>
                </div>
            </footer>
        </>


    )
}

export default Footer