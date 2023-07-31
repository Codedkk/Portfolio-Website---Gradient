// import React from 'react';
import { useEffect, useRef, useState } from 'react';
import React, { useLayoutEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const ProjectsCard = ({ projectTitle, thumbnail, brief, stacks, stacksInfo, isLast }) => {

    let card_content = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const card_sections = self.selector('div');
            card_sections.forEach((card_section) => {
                gsap.from(card_section, {
                    delay: 0.5,
                    duration: 1,
                    x: -50,
                    scrollTrigger: {
                        trigger: card_section,
                        scrub: true,
                        start: 'bottom bottom',
                        end: 'top 0%',
                        ease: "elastic.out(3, 0.5)"
                    },
                });

            });
        }, card_content); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);

    // gsap.from(card_section, {
    //     x: 150,
    //     scrollTrigger: {
    //         trigger: card_section,
    //         scrub: true,
    //         start: 'bottom bottom',
    //         end: 'top 0%',

    //         // pin: true,



    //     },
    // });

    // let timeline = gsap.timeline();
    // let card_right = useRef(null);

    // useEffect(() => {
    //     timeline.from(card_right, {
    //         delay: 1,
    //         duration: .5,
    //         opacity: 0,
    //         y: 100
    //     })

    // }, [])



    return (
        <div className="projects-card ">
            <div className="card-content" ref={el => card_content = el}>
                <div className="card-right" >
                    <div className="card-heading">
                        <div className="card-title">
                            <h3 className="project-title">{projectTitle}</h3>
                            <i className="fa-solid fa-arrow-up-right-from-square card-live"></i>
                        </div>
                        <div className="card-icons">
                            <button className="button card-button">VIEW CODE</button>
                            <div className="stack-icons">
                                {stacks.map((stack, index) => (
                                    <img
                                        key={index}
                                        src={stacksInfo[stack]}
                                        alt={stack}
                                        className="stack-icon"
                                    />
                                ))}
                            </div>


                        </div>
                    </div>
                    <div className="card-desc">{brief.map((item) => (
                        <li key={item}>{item}</li>
                    ))}</div>
                </div>

                <div className="card-left">
                    <div className="project-thumbnail">
                        <img src={thumbnail} alt="" />
                    </div>
                </div>

            </div>
            <div className={`${isLast ? '' : 'header-line'}`}></div>

        </div>
    );
};

export default ProjectsCard;
