import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

    let footer = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const footers = self.selector('div');
            footers.forEach((footer) => {
                gsap.from(footer, {
                    delay: 10000000,
                    duration: 90,
                    x: -100,
                    scrollTrigger: {
                        trigger: footer,
                        scrub: .005,
                        start: 'top 150%',
                        end: 'top 0%',
                        toggleActions: "none pause none none",
                        // markers: {
                        //     startColor: "black",
                        //     endColor: "pink",
                        // }

                    },
                });

            });
        }, footer);
        return () => ctx.revert();
    }, []);
    return (
        <>
            <div className="footer container" ref={el => footer = el}>
                <div className="footer-content">
                    <div className="footer-nav">
                        <div>Projects</div>
                        <div>Resume</div>
                        <div>About</div>
                        <div>Work with me</div>
                    </div>
                    <div className="footer-icons">
                        <i className="fa-brands fa-github"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-regular fa-envelope"></i>
                    </div>

                    <div className="footer-by">
                        Developed By <span className="logo">Jellyfish</span>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Footer