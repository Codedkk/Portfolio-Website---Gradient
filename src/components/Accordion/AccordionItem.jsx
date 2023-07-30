import React, { useState, useEffect } from 'react';

const AccordionItem = ({ title, handleClick, isOpen, children }) => {
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
                setShowChildren(isOpen);
            }
        };

        setShowChildren(mediaQuery.matches || isOpen);

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, [isOpen]);

    return (
        <div>
            <div onClick={handleToggleChildren} className="projects-header container">
                <div className="header-line"></div>
                <div className="projects-heading">
                    <div className="projects-title">{title}</div>
                    <div className="header-arrow ">
                        <i className={`fa-sharp fa-solid ${showChildren ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                    </div>


                </div>
                {title === "Resume" && !showChildren && <div className="resume-header-line"></div>}
            </div>
            {showChildren && <div>{children}</div>}
            {title === "Resume" && showChildren && <div className="resume-header-line"></div>}

        </div>
    );
};

export default AccordionItem;
