import React from 'react';

const Resume = ({ handleClick, openAccordion, children }) => {
    return (
        <div>
            <div onClick={handleClick}>
                Some Content
            </div>
            {openAccordion && <div>{children}</div>}
        </div>
    );
};

export default Resume;
