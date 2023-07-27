import React from 'react';

const About = ({ handleClick, openAccordion, children }) => {
    return (
        <div>
            <div onClick={handleClick}>
                About Content
            </div>
            {openAccordion && <div>{children}</div>}
        </div>
    );
};

export default About;
