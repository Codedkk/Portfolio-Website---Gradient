import React from 'react';

const ProjectsCard = ({ projectTitle, thumbnail, brief, stacks, stacksInfo }) => {
    return (
        <div className="projects-card ">
            <div className="card-content">
                <div className="card-right">
                    <div className="card-heading">
                        <div className="card-title">
                            <h3 className="project-title">{projectTitle}</h3>
                            <i className="fa-solid fa-arrow-up-right-from-square card-live"></i>
                        </div>
                        <div className="stack-icons">
                            <button className="button card-button">VIEW CODE</button>
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
