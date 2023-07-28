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
    {
        projectTitle: "hallow",
        thumbnail: "public/asset/img/ProjectsContent/Projects-hallow/red-white-cat-i-white-studio.jpg",
        brief: ["fully responsive with user-centricity",
            "combined with API real life data fetching",],
        stacks: ["react", "sass", "js"]
    },
    {
        projectTitle: "influencer portfolio",
        thumbnail: "public/asset/img/ProjectsContent/Projects-ecom/ecom2.png",
        brief: ["fully responsive with user-centricity",
            "combined with API real life data fetching",],
        stacks: ["react", "sass", "js"]
    }

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
