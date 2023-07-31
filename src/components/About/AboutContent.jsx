import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutContent = () => {

    let about_content = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const about_contents = self.selector('div');
            about_contents.forEach((about_content) => {
                gsap.from(about_content, {
                    delay: 2,
                    duration: 5,
                    x: "40%",
                    scrollTrigger: {
                        trigger: about_content,
                        scrub: true,
                        start: 'bottom bottom',
                        end: 'top 0%',

                    },
                });

            });
        }, about_content); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);

    return (
        <div>

            <div className="about-content container" ref={el => about_content = el}>

                <div className="about-container">

                    <div className="about-top">
                        <div className="about-line"></div>
                        <div className="about-meet">Meet Kola</div>
                    </div>
                    <div className="about-bottom">
                        <div className="about-left">

                            <div className="about-slogan">
                                Digital experiences for driven modern
                                brands
                            </div>

                            <div className="about-image">
                                <img src="asset/img/about-frame.svg" alt="" className="about-frame" />
                            </div>
                        </div>
                        <div className="about-right">
                            <div className="about-skill">
                                <h4 className="about-skill-title">Skillset</h4>
                                <div className="about-skillset">

                                    <ul>
                                        <li>React</li>
                                        <li>Javascript</li>
                                        <li>SASS</li>
                                        <li>CSS</li>

                                        <li>GIT</li>
                                    </ul>
                                    <ul>
                                        <li>Tailwind</li>
                                        <li>MUI</li>
                                        <li>Figma</li>
                                        <li>Abobe Suit</li>
                                        <li>ChatGPT</li>

                                    </ul>
                                </div>
                            </div>
                            <div className="about-desc">
                                Hi, I'm a business-minded designer with 3+ ng immersive digital experiences that e modern companies and boost their e modern companies and boost their
                                brands. Let's collaborate to e modern companies and boost their brands.
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default AboutContent