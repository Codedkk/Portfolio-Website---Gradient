import React from 'react';
import ProjectsCard from './ProjectsCard';

const projectInfo = [
    {
        projectTitle: "fashion ecommerce website",
        thumbnail: "public/asset/img/ProjectsContent/Free_MacBook_Pro_1.jpeg",
        brief: ["Fully responsive with user-centricity Lorem ipsum dolor sit amet conser adipisicing elit. Reiciendis, non.", "Combined with API real life data fetching"],
        stacks: ["react", "sass", "gsap"]
    },
    {
        projectTitle: "Real World TODO App",
        thumbnail: "public/asset/img/ProjectsContent/Free_Iphone_13_Pro_Mockup_1.jpeg",
        brief: ["Fully responsive with user-centricity", "Combined with API real life data fetching"],
        stacks: ["react", "sass", "gsap"]
    },
    {
        projectTitle: "hallow",
        thumbnail: "public/asset/img/ProjectsContent/Free_MacBook_Pro_1.jpeg",
        brief: ["Fully responsive with user-centricity",
            "Combined with API real life data fetching",],
        stacks: ["react", "sass", "js"]
    },
    {
        projectTitle: "influencer portfolio",
        thumbnail: "public/asset/img/ProjectsContent/Free_iPhone_12_Mockup_3.jpeg",
        brief: ["Fully responsive with user-centricity",
            "Combined with API real life data fetching",],
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
        <div className='projects-content container'>
            <div className="projects-title">PROJECTS</div>
            {projectInfo.map((project, index) => (
                <ProjectsCard
                    key={index}
                    projectTitle={project.projectTitle}
                    thumbnail={project.thumbnail}
                    brief={project.brief}
                    stacks={project.stacks}
                    stacksInfo={stacksInfo}
                    isLast={index === (projectInfo.length + 1)}
                />
            ))}

        </div>

    );
};

export default ProjectsContent;
