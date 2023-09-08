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
                    delay: 10000000,
                    duration: 900,
                    x: "80%",
                    scrollTrigger: {
                        trigger: about_content,
                        scrub: .005,
                        start: 'top 300%',
                        end: 'bottom center',
                        toggleActions: "none pause none none",
                    },
                });

            });
        }, about_content);
        return () => ctx.revert();
    }, []);



    //TODO
    const handleButtonMail = () => {
        window.open('mailto:KKxDEV@proton.me');
    };


    return (
        <section>
            <div className="about-content container" id="about" >

                <div className="about-container" >

                    <div className="about-top">

                        <div className="about-meet">Meet Kiki</div>
                    </div>
                    <div className="about-bottom">
                        <div className="about-left">

                            <div className="about-slogan">
                                Digital experiences to make an impact
                            </div>

                            <div className="about-image">
                                <img src="asset/img/about-frame.jpeg" alt="portrait" className="about-frame" />
                            </div>
                        </div>
                        <div className="about-right" ref={el => about_content = el}>
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

                                        <li>MUI</li>
                                        <li>Figma</li>
                                        <li>Abobe Suit</li>
                                        <li>Aseprite</li>
                                        <li>ChatGPT</li>

                                    </ul>
                                </div>
                            </div>

                            <div className="about-desc">
                                Hi, I am a creative front-end developer skilled in JavaScript and React. With an eye for design, I create and implement visually appealing UI. Being a self-taught enthusiast, I stay updated with the latest techniques and sharpen my problem-solving skills. I am excited to contribute my skills and passion to create products and make an impact.
                            </div>
                            <div className="about_social" >
                                <a href="https://github.com/KKDEVE" target="_blank" rel="noopener noreferrer" className="about_social_icon">
                                    <img src="../../public/asset/img/icon/github.svg" alt="" />

                                </a>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="about_social_icon" onClick={handleButtonMail}>
                                    <img src="../../public/asset/img/icon/mail.svg" alt="" />

                                </a>
                                <a href="https://www.linkedin.com/in/kiki-deng" target="_blank" rel="noopener noreferrer" className="about_social_icon">
                                    <img src="../../public/asset/img/icon/linkedin.svg" alt="" />
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default AboutContent