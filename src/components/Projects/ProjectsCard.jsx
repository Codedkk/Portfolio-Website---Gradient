// import React from 'react';
import { useEffect, useRef, useState } from 'react';
import React, { useLayoutEffect } from 'react';
import Slider from "./Slider"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LinkExternalIcon } from '@primer/octicons-react'

gsap.registerPlugin(ScrollTrigger);


// timeline.to(card_content, { duration: 9 },)
//     .addPause(100)
//     .to(card_content, { duration: 9 }, + 5)
//     .addPause(100000000000000)
//     .to(card_content, { duration: 9 });

// var timeline = gsap.timeline();
// let card_content = useRef();


// useLayoutEffect(() => {
//     const ctx = gsap.context((self) => {
//         const card_sections = self.selector('div');
//         card_sections.forEach((card_section) => {
//             const animation = gsap.from(card_section, {
//                 delay: 2,
//                 // duration: 900,
//                 x: -50,
//                 scrollTrigger: {
//                     trigger: card_section,
//                     scrub: true,
//                     start: 'top 100%',
//                     end: 'top 20%',
//                     toggleActions: "none pause none none",
//                     // markers: true
//                 },
//             });
//         });
//     }, card_content);
//     return () => ctx.revert();
// }, []);

// ref={el => card_content = el}



const ProjectsCard = ({ projectTitle, images, brief, stacks, stacksInfo, isLast, mouseColor, mouseSecColor }) => {


    const containerRef = useRef(null);
    const gradientRef = useRef(null);


    var timeline = gsap.timeline();

    let card_content = useRef();


    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const card_sections = self.selector('div');
            card_sections.forEach((card_section) => {
                const animation = gsap.from(card_section, {
                    delay: .3,
                    x: -80,
                    scrollTrigger: {
                        trigger: card_section,
                        scrub: true,
                        start: 'top 100%',
                        end: 'top 90%',
                        toggleActions: "none pause none none",
                        // markers: true
                    },
                });
            });
        }, card_content);
        return () => ctx.revert();
    }, []);


    useEffect(() => {


        const container = containerRef.current;
        const gradient = gradientRef.current;
        const mouseX = { value: 0 };
        const mouseY = { value: 0 };

        function handleMouseMove(event) {
            const { left, top } = container.getBoundingClientRect();
            mouseX.value = event.clientX - left;
            mouseY.value = event.clientY - top;
        }

        container.addEventListener("mousemove", handleMouseMove);

        const tl = gsap.timeline({ paused: true });
        tl.to(gradient, {
            duration: 0.3,
            autoAlpha: 1,
        });

        function animateGradient() {
            gsap.to(gradient, {
                duration: 1,
                background: `radial-gradient(
                    110px circle at ${mouseX.value}px ${mouseY.value}px,
                    ${mouseColor} 0%,
                    ${mouseSecColor} 30%,
                    transparent 90%
                  )`,
            });
        }

        function playAnimation() {
            tl.play();
        }

        function pauseAnimation() {
            tl.pause();
        }

        function updateAnimation() {
            tl.progress(0).play();
        }

        container.addEventListener("mouseenter", playAnimation);
        container.addEventListener("mouseleave", pauseAnimation);
        container.addEventListener("mousemove", animateGradient);
        container.addEventListener("transitionend", updateAnimation);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseenter", playAnimation);
            container.removeEventListener("mouseleave", pauseAnimation);
            container.removeEventListener("mousemove", animateGradient);
            container.removeEventListener("transitionend", updateAnimation);
        };
    }, []);





    return (
        <div className="projects-card " ref={containerRef}>
            <div className="card-content" ref={gradientRef} >
                <div className="card-right" >
                    <div className="card-heading">
                        <div className="card-title">
                            <h3 className="project-title">{projectTitle}</h3>
                        </div>
                        <div className="card-desc">
                            <ul className="star-list">
                                {brief.map((item) => (
                                    <li key={item}><span className="star" >✷</span>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="card-icons">
                            <div className="stack-icons">
                                {/* <img src="../../public/asset/img/icon/live.svg" alt="view live projects" className="card-live" /> */}
                                <img src="../../public/asset/img/icon/github.svg" alt="" className="card-github" />
                                {stacks.map((stack, index) => (
                                    <img
                                        key={index}
                                        src={stacksInfo[stack]}
                                        alt={stack}
                                        className="stack-icon"
                                    />
                                ))}
                            </div>
                            <button className="button card-button">VIEW LIVE</button>
                        </div>
                    </div>

                </div>

                <div className="card-left" ref={el => card_content = el}>
                    <div className="project-thumbnail">
                        <Slider images={images} />
                    </div>
                </div>

            </div>
            <div className={`${isLast ? '' : 'header-line'}`}></div>

        </div>
    );
};

export default ProjectsCard;
