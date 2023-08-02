import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ResumeContent = () => {

    let resume_content = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const resume_contents = self.selector('div');
            resume_contents.forEach((resume_content) => {
                gsap.from(resume_content, {
                    delay: 2,
                    // duration: 90,
                    x: -400,
                    scrollTrigger: {
                        trigger: resume_content,
                        scrub: .005,
                        start: 'top 150%',
                        end: 'top 50%',
                        toggleActions: "none pause none none",
                        markers: {
                            startColor: "yellow",
                            endColor: "pink",
                        }

                    },
                });

            });
        }, resume_content);
        return () => ctx.revert();
    }, []);

    return (
        <div className='resume-content ' ref={el => resume_content = el}>
            <div>
                <div className="resume-title">WORK WITH ME</div>

            </div>
            <div className="resume-button">
                <button className="button button-resume">✧ Get Resume ✧</button>
            </div>
        </div>
    )
}

export default ResumeContent