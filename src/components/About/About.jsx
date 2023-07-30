import React from 'react';

const About = ({ handleClick, openAccordion, children }) => {
    return (
        <div>
            <div onClick={handleClick}>
            </div>
            {openAccordion && <div>{children}</div>}
        </div>
    );
};

export default About;
