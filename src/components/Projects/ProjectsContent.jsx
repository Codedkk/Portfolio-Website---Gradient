import React from 'react';
import ProjectsCard from './ProjectsCard';

const projectInfo = [
    {
        projectTitle: "fashion ecommerce website",
        images: ["/asset/img/ProjectsContent/Projects/e/e-mac.jpg", "/asset/img/ProjectsContent/Projects/e/ecard.png", "/asset/img/ProjectsContent/Projects/e/e-section.jpg", "/asset/img/ProjectsContent/Projects/e/e-ipad.jpg",],
        brief: ["Develop, test and deploy a fully responsive fashion e-commerce website with a modern design using React, React Redux, and Sass.", "Leverage API data fetching techniques to enable advanced filtering options and smooth browsing through product categories.", "A shopping cart with state persistence, allows users to add and manage items effortlessly.", "Powered by Strapi, a headless CMS, it seamlessly integrates content management capabilities, allowing for effortless updates and modifications."],
        stacks: ["react", "sass", "gsap"],
        mouseSecColor: "rgb(170, 200, 167)",
        mouseColor: "rgb(253, 255, 174)",
        // mouseSecColor: "rgb(145, 200, 228)",
        // mouseColor: "rgb(16, 44, 87)",

        // mouseColor: "white",
        // mouseSecColor: "rgba(192, 173, 143, 1)",
        // mouseColor: "rgb(250, 240, 215)",
        // mouseSecColor: "rgba(173, 195, 214, 1)",
    },
    {
        projectTitle: "Real World TODO App",
        images: ["/asset/img/ProjectsContent/Projects/p/p1.jpg", "/asset/img/ProjectsContent/Projects/p/p3.jpg",],
        brief: ["Design and develop a fully responsive developer portfolio website utilizing React.Js, GSAP, React scroll, and Sass.", "Using dynamic data management to streamline updates and modifications of UI.", "Create an interactive and appealing user interface with intriguing visual details to establish a clear design hierarchy."],
        stacks: ["react", "sass", "gsap"],
        mouseSecColor: "rgb(116, 155, 194)",
        mouseColor: "rgb(255, 225, 225)",
    },
    {
        projectTitle: "hallow",
        images: ["/asset/img/ProjectsContent/Projects/h/h-mock2.jpg", "/asset/img/ProjectsContent/Projects/h/h-mock1.jpg", "/asset/img/ProjectsContent/Projects/h/h-fav.jpg", 'public/asset/img/ProjectsContent/Projects/h/h-mock3.png'],
        brief: ["Create a fully responsive design using HTML, JavaScript, and SwiperJS library to ensure optimal viewing experience across devices.", "Incorporate smooth animations in each section of the website to enhance user interaction and create an immersive browsing experience.", "Implement scrollable cards and a carouse feature to effectively showcase highlights, ensuring easy access and navigation between different sections."],
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
