import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import Mailmodal from "./Mailmodal"
import Shuffler from './Shuffler';
import Sparkle from 'react-sparkle'


const Hero = ({ }) => {
    let timeline = gsap.timeline();
    let hero_text = useRef(null);
    let button_hero = useRef(null);
    // let hero_social = useRef(null);

    const [modalOpen, setModalOpen] = useState(false);
    const handleButtonHover = () => {
        document.body.style.backgroundImage = "url(/asset/img/lighter.png)";
        document.body.style.backgroundSize = "150%";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center top";
    };

    const handleButtonUnhover = () => {
        document.body.style.backgroundImage = "url(/asset/img/gradient.png)";
        document.body.style.backgroundSize = "150%";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center top";
    };



    useEffect(() => {
        timeline.from(hero_text, {
            delay: 2,
            duration: 2,
            opacity: 0,
            y: 200
        }, "-=1")
        timeline.from(button_hero, {
            duration: .8,
            opacity: 0,
            y: 100
        }, "-=.5")
        // timeline.from(hero_social, {

        //     duration: .8,
        //     opacity: 0,
        //     y: 100
        // }, "-=.5")

    }, [])



    return (
        <section className="hero">
            <div className="hero_text" ref={el => hero_text = el} >
                <span >Kiki is &nbsp;
                    <span>a&nbsp;
                        <div className="hero_text-first">
                            <span> ✷︎ </span>
                            <span>creative developer,</span>
                        </div>&nbsp;</span>
                    <span>
                        <div className="hero_text-second">
                            <span >✎︎ </span>
                            <span> fusing <Shuffler /> with <span className="hero_text-style">style</span></span>
                        </div>&nbsp;</span>
                    {/* <span>with
                        <div className="hero_text-third">
                            <span>✹︎ </span>
                            <span >visual lorem</span>
                        </div>&nbsp;
                    </span> */}

                </span>
                {/* <span className="hero_text-first">
                    <span>Koli is a</span>&nbsp;
                    <span className="hero_text-second">
                        <span><span>✷︎ </span><span>marketing strategist</span></span>&nbsp;</span>

                    <span className="hero_text-third"><span>✹</span><span><span>empathyn</span> and</span>&nbsp;
                    </span>
                    <span className="hero_text-fourth"><span>✶</span><span>visual lorem</span>&nbsp;</span>
                </span> */}

            </div>
            <button
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonUnhover}

                className="button button-hero" ref={el => button_hero = el} onClick={() => {
                    setModalOpen(true);
                }} >
                <Sparkle
                    fadeOutSpeed={20}
                    newSparkleOnFadeOut={true}
                    flicker
                    flickerSpeed="slow"
                    minSize={3}
                    maxSize={5}
                    count={100}
                />
                Say HI! </button>


            {modalOpen && <Mailmodal setOpenModal={setModalOpen} />}

        </section>
    )
}

export default Hero