import React from 'react';

const ProjectsCard = ({ projectTitle, thumbnail, brief, stacks, stacksInfo }) => {
    return (
        <div className="projects-card container">

            <div className="card-content">
                <div className="card-right">
                    <div className="card-heading">
                        <h3 className="card-title">{projectTitle}</h3>
                    </div>
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
            <div className="header-line"></div>
        </div>
    );
};

export default ProjectsCard;
