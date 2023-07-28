import React from 'react';
import ProjectsCard from './ProjectsCard';

const projectInfo = [
    {
        projectTitle: "fashion ecommerce",
        thumbnail: "public/asset/img/ProjectsContent/Projects-hallow/98t76P6U4fX5d3dQT0H4W8mjM.png",
        brief: ["fully responsive with user-centricity", "combined with API real life data fetching"],
        stacks: ["react", "sass", "gsap"]
    },
    {
        projectTitle: "Real World TODO App",
        thumbnail: "public/asset/img/ProjectsContent/Projects-ecom/ecom1.png",
        brief: ["fully responsive with user-centricity", "combined with API real life data fetching"],
        stacks: ["react", "sass", "gsap"]
    },
];

const stacksInfo = {
    react: "public/asset/img/ProjectsContent/stackIcons/react.svg",
    js: "public/asset/img/ProjectsContent/stackIcons/js.svg",
    sass: "public/asset/img/ProjectsContent/stackIcons/sass.svg",
    gsap: "public/asset/img/ProjectsContent/stackIcons/gsap.png"
};

const ProjectsContent = () => {
    return (
        <div>
            {projectInfo.map((project, index) => (
                <ProjectsCard
                    key={index}
                    projectTitle={project.projectTitle}
                    thumbnail={project.thumbnail}
                    brief={project.brief}
                    stacks={project.stacks}
                    stacksInfo={stacksInfo} // Pass stacksInfo as a prop to ProjectsCard
                />
            ))}
        </div>
    );
};

export default ProjectsContent;


// {
//     projectTitle: "hallow",
//     thumbnail: "public/asset/img/ProjectsContent/Projects-hallow/red-white-cat-i-white-studio.jpg",
//     brief: ["fully responsive with user-centricity",
//         "combined with API real life data fetching",],
//     stacks: ["react", "sass", "mui"]
// },
// {
//     projectTitle: "influencer portfolio",
//     thumbnail: "public/asset/img/ProjectsContent/Projects-ecom/ecom2.png",
//     brief: ["fully responsive with user-centricity",
//         "combined with API real life data fetching",],
//     stacks: ["react", "sass", "mui"]
// },


 // <div>
        //     <ProjectsCard projectTitle={projectTitle}></ProjectsCard>
        // </div>

        // <div className="projectsContent">
        //     <div className="project-first">
        //         <h2>Project Hallow</h2>
        //         <div className="project-img">
        //             <img src="public/asset/img/ProjectsContent/Projects-hallow/98t76P6U4fX5d3dQT0H4W8mjM.png" alt="" />
        //         </div>
        //     </div>
        //     <div className="project-second">
        //         <h2>Project Ecom</h2>
        //         <div className="project-img">
        //             <img src="public/asset/img/ProjectsContent/Projects-ecom/ecom1.png" alt="" />
        //         </div>
        //     </div>
        //     <div className="project-third">
        //         <h2>Project TODO APP</h2>
        //         <div className="project-img">
        //             <img src="public/asset/img/ProjectsContent/Projects-hallow/red-white-cat-i-white-studio.jpg" alt="" />
        //         </div>
        //     </div>
        //     <div className="project-third">
        //         <h2>Project TODO APP</h2>
        //         <div className="project-img">
        //             <img src="public/asset/img/ProjectsContent/Projects-ecom/ecom2.png" alt="" />
        //         </div>
        //     </div>

        // </div>
