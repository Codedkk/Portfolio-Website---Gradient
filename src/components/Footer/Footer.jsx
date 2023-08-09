import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

    let footer = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const footers = self.selector('div');
            footers.forEach((footer) => {
                gsap.from(footer, {
                    y: -300,
                    scrollTrigger: {
                        trigger: footer,
                        scrub: .005,
                        start: 'top 150%',
                        end: 'top 10%',
                        toggleActions: "none pause none none",
                        markers: {
                            startColor: "black",
                            endColor: "pink",
                        }
                    },
                });

            });
        }, footer);
        return () => ctx.revert();
    }, []);

    return (
        <>
            <footer className="footer container" ref={el => footer = el}>
                <div className="footer-content">
                    <div className="footer-nav">
                        {/* <div>Projects</div>
                        <div>Resume</div>
                        <div>About</div>
                        <div>Work with me</div> */}
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
                        <img src="../../public/asset/img/icon/github.svg" alt="" />
                        <img src="../../public/asset/img/icon/mail.svg" alt="" />
                        <img src="../../public/asset/img/icon/linkedin.svg" alt="" />

                    </div>

                    <div className="footer-by">
                        Developed By <span className="logo">KoliGreen</span>
                    </div>
                </div>
            </footer>
        </>


    )
}

export default Footer