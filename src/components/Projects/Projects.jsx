import React, { useState, useEffect } from 'react';

const Projects = ({ handleClick, openAccordion, children }) => {
    const [showChildren, setShowChildren] = useState(false);

    const handleToggleChildren = () => {
        setShowChildren(!showChildren);
    };



    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        const handleMediaQueryChange = (e) => {
            if (e.matches) {
                setShowChildren(true);
            } else {
                setShowChildren(openAccordion);
            }
        };

        setShowChildren(mediaQuery.matches || openAccordion);

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, [openAccordion]);

    return (
        <div>
            <div onClick={handleToggleChildren} className="projects-header">
                <div className="header-line"></div>
                <div className="projects-heading">
                    <div className="projects-title">Projects</div>
                    <div className="header-arrow">&gt;</div>
                </div>
            </div>
            {showChildren && <div>{children}</div>}
        </div>
    );
};

export default Projects;
