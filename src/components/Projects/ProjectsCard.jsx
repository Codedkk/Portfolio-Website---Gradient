import React from 'react';

const ProjectsCard = ({ projectTitle, thumbnail, brief, stacks, stacksInfo }) => {
    return (
        <div className="projects-card container">
            <div className="header-line"></div>

            <div className="card-right">
                <div className="projects-heading">
                    <h3 className="project-title">{projectTitle}</h3>
                </div>
                <div className="projects-desc">{brief}</div>
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

            </div>

            <div className="card-left">
                <div className="project-thumbnail">
                    <img src={thumbnail} alt="" />
                </div>

            </div>



        </div>
    );
};

export default ProjectsCard;
