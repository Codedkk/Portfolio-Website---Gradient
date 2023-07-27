import About from '../About/About'
import Resume from '../Resume/Resume'
import React from 'react'
import Projects from '../Projects/Projects'
import { useState } from 'react';
import ProjectsContent from '../Projects/ProjectsContent';
import AboutContent from '../About/AboutContent';
import ResumeContent from '../Resume/ResumeContent';

const Accordion = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const handleAccordionClick = (section) => {
        if (openAccordion === section) {
            setOpenAccordion(null);
        } else {
            setOpenAccordion(section);
        }
    };

    return (
        <div>
            <Projects handleClick={() => handleAccordionClick('projects')} openAccordion={openAccordion === 'projects'}>
                <ProjectsContent />
            </Projects>

            <About handleClick={() => handleAccordionClick('about')} openAccordion={openAccordion === 'about'}>
                <AboutContent />
            </About>

            <Resume handleClick={() => handleAccordionClick('resume')} openAccordion={openAccordion === 'resume'}>
                <ResumeContent />
            </Resume>
        </div>
    );
};

export default Accordion;
