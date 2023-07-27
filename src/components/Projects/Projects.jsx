import React from 'react';

const Projects = ({ handleClick, openAccordion, children }) => {
    return (
        <div>
            <div onClick={handleClick}>
                <div className="header-line"></div>
                <div className="projects">
                    <div className="projects-header">
                        <div className="projects-heading">Projects</div>
                        <div className="header-arrow">
                            &gt;
                        </div>
                    </div>
                </div>

            </div>

            {openAccordion && <div>{children}</div>}
        </div>
    );
};

export default Projects;
