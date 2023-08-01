// import React from 'react';
import { useEffect, useRef, useState } from 'react';
import React, { useLayoutEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const ProjectsCard = ({ projectTitle, thumbnail, brief, stacks, stacksInfo, isLast }) => {

    var timeline = gsap.timeline();
    let card_content = useRef();


    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const card_sections = self.selector('div');
            card_sections.forEach((card_section) => {
                const animation = gsap.from(card_section, {
                    delay: 2,
                    // duration: 900,
                    x: -40,
                    scrollTrigger: {
                        trigger: card_section,
                        scrub: true,
                        start: 'top 110%',
                        end: 'top 30%',
                        toggleActions: "none pause none none",
                        markers: true
                    },
                });
            });
        }, card_content);
        return () => ctx.revert();
    }, []);


    // timeline.to(card_content, { duration: 9 },)
    //     .addPause(100)
    //     .to(card_content, { duration: 9 }, + 5)
    //     .addPause(100000000000000)
    // .to(card_content, { duration: 9 });

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
