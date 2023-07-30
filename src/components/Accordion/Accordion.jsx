import React, { useState, useEffect } from 'react';
import AccordionItem from './AccordionItem';
import About from '../About/About';
import Resume from '../Resume/Resume';
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
            <AccordionItem
                title="Projects"
                handleClick={() => handleAccordionClick('projects')}
                isOpen={openAccordion === 'projects'}
            >
                <ProjectsContent />
            </AccordionItem>

            <AccordionItem
                title="About"
                handleClick={() => handleAccordionClick('about')}
                isOpen={openAccordion === 'about'}
            >
                <AboutContent />
            </AccordionItem>

            <AccordionItem
                title="Resume"
                handleClick={() => handleAccordionClick('resume')}
                isOpen={openAccordion === 'resume'}
            >
                <ResumeContent />
            </AccordionItem>

        </div>
    );
};

export default Accordion;
