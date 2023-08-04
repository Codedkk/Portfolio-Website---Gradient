import React from 'react';
import ProjectsCard from './ProjectsCard';

const projectInfo = [
    {
        projectTitle: "fashion ecommerce website",
        images: ["/asset/img/ProjectsContent/project-ecommerce/ecommerce macbook.jpg"],
        brief: ["A fully responsive fashion e-commerce website with a sleek and modern design using React, React Redux, and Sass.", "Leveraged API data fetching techniques to enable advanced filtering options and smooth browsing", "Integrated a shopping cart feature that persists state, allowing users to add and manage items effortlessly.", "Powered by Strapi, it seamlessly integrates content management capabilities, allowing for effortless updates."],
        stacks: ["react", "sass", "gsap"],
        // mouseColor: "rgb(212, 186, 169,100%)",
        // mouseSecColor: "rgb(195, 216, 234,100%)"
        // mouseSecColor: "rgb(116, 155, 194)",
        // mouseColor: "rgb(246, 244, 235)",
        // mouseColor: "rgb(79, 112, 156)",
        // mouseSecColor: "rgb(255, 217, 102)"
        mouseColor: "white",
        mouseSecColor: "rgba(192, 173, 143, 1)"

    },
    {
        projectTitle: "Real World TODO App",
        images: ["/asset/img/ProjectsContent/project-portfolio gradient/portfolio iphone 14.jpg"],
        brief: ["A fully responsive fashion e-commerce website with a sleek and modern design using React, React Redux, and Sass.", "Leveraged API data fetching techniques to enable advanced filtering options and smooth browsing through product categories.", "Integrated a shopping cart feature that persists state, allowing users to add and manage items effortlessly.", "Powered by Strapi, a headless CMS, it seamlessly integrates content management capabilities, allowing for effortless updates and modifications."],
        stacks: ["react", "sass", "gsap"],
        mouseSecColor: "rgb(116, 155, 194)",
        mouseColor: "rgb(255, 225, 225)",
    },
    {
        projectTitle: "hallow",
        images: ["/asset/img/ProjectsContent/project-hallow/hallowmacbook.jpg"],
        brief: ["A fully responsive fashion e-commerce website with a sleek and modern design using React, React Redux, and Sass.", "Leveraged API data fetching techniques to enable advanced filtering options and smooth browsing through product categories.", "Integrated a shopping cart feature that persists state, allowing users to add and manage items effortlessly.", "Powered by Strapi, a headless CMS, it seamlessly integrates content management capabilities, allowing for effortless updates and modifications."],
        wordTounderline: ["fully responsive", "API data fetching", "persists state", "content management"],
        stacks: ["react", "sass", "js"],
        mouseColor: "rgb(255, 225, 225)",
        mouseSecColor: "rgb(144, 161, 125)"
    },
    {
        projectTitle: "influencer portfolio",
        images: ["public/asset/img/ProjectsContent/Free_MacBook_Pro_1.jpeg", "public/asset/img/ProjectsContent/Free_Iphone_13_Pro_Mockup_1.jpeg"],
        brief: ["A fully responsive fashion e-commerce website with a sleek and modern design using React, React Redux, and Sass.", "Leveraged API data fetching techniques to enable advanced filtering options and smooth browsing through product categories.", "Integrated a shopping cart feature that persists state, allowing users to add and manage items effortlessly.", "Powered by Strapi, a headless CMS, it seamlessly integrates content management capabilities, allowing for effortless updates and modifications."],
        stacks: ["react", "sass", "js"],
        mouseColor: "rgb(255, 225, 225)",
        mouseSecColor: "rgb(144, 161, 125)"
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
        <section className='projects-content container' id="projects">
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

                    mouseColor={project.mouseColor}
                    mouseSecColor={project.mouseSecColor}
                />
            ))}

        </section>

    );
};

export default ProjectsContent;
