import React from 'react';
import ProjectsCard from './ProjectsCard';

const projectInfo = [
    {
        projectTitle: "fashion ecommerce",
        thumbnail: "public/asset/img/ProjectsContent/Free_MacBook_Pro_1.jpeg",
        brief: ["Fully responsive with user-centricity", "Combined with API real life data fetching"],
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
        <div className='ProjectsContent'>
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
