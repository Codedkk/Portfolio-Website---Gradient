import React from 'react';
import ProjectsCard from './ProjectsCard';

const projectInfo = [
    {
        projectTitle: "fashion ecommerce website",
        images: ["public/asset/img/ProjectsContent/Free_MacBook_Pro_1.jpeg", "public/asset/img/ProjectsContent/Free_Iphone_13_Pro_Mockup_1.jpeg"],
        brief: ["A fully responsive fashion e-commerce website with a sleek and modern design using React, React Redux, and Sass.", "Leveraged API data fetching techniques to enable advanced filtering options and smooth browsing", "Integrated a shopping cart feature that persists state, allowing users to add and manage items effortlessly.", "Powered by Strapi, it seamlessly integrates content management capabilities, allowing for effortless updates."],
        stacks: ["react", "sass", "gsap"]
    },
    {
        projectTitle: "Real World TODO App",
        images: ["public/asset/img/ProjectsContent/Free_MacBook_Pro_1.jpeg", "public/asset/img/ProjectsContent/Free_Iphone_13_Pro_Mockup_1.jpeg"],
        brief: ["A fully responsive fashion e-commerce website with a sleek and modern design using React, React Redux, and Sass.", "Leveraged API data fetching techniques to enable advanced filtering options and smooth browsing through product categories.", "Integrated a shopping cart feature that persists state, allowing users to add and manage items effortlessly.", "Powered by Strapi, a headless CMS, it seamlessly integrates content management capabilities, allowing for effortless updates and modifications."],
        stacks: ["react", "sass", "gsap"]
    },
    {
        projectTitle: "hallow",
        images: ["public/asset/img/ProjectsContent/Free_MacBook_Pro_1.jpeg", "public/asset/img/ProjectsContent/Free_Iphone_13_Pro_Mockup_1.jpeg"],
        brief: ["A fully responsive fashion e-commerce website with a sleek and modern design using React, React Redux, and Sass.", "Leveraged API data fetching techniques to enable advanced filtering options and smooth browsing through product categories.", "Integrated a shopping cart feature that persists state, allowing users to add and manage items effortlessly.", "Powered by Strapi, a headless CMS, it seamlessly integrates content management capabilities, allowing for effortless updates and modifications."],
        stacks: ["react", "sass", "js"]
    },
    {
        projectTitle: "influencer portfolio",
        images: ["public/asset/img/ProjectsContent/Free_MacBook_Pro_1.jpeg", "public/asset/img/ProjectsContent/Free_Iphone_13_Pro_Mockup_1.jpeg"],
        brief: ["A fully responsive fashion e-commerce website with a sleek and modern design using React, React Redux, and Sass.", "Leveraged API data fetching techniques to enable advanced filtering options and smooth browsing through product categories.", "Integrated a shopping cart feature that persists state, allowing users to add and manage items effortlessly.", "Powered by Strapi, a headless CMS, it seamlessly integrates content management capabilities, allowing for effortless updates and modifications."],
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
        <div className='projects-content container' id="projects">
            <div className="projects-title">PROJECTS</div>
            {projectInfo.map((project, index) => (
                <ProjectsCard
                    key={index}
                    projectTitle={project.projectTitle}
                    images={project.images}
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
