import React from 'react';
import ProjectsCard from './ProjectsCard';

const projectInfo = [
    {
        projectTitle: "fashion ecommerce website",
        images: ["/asset/img/ProjectsContent/Projects/e/e-mac.jpg", "/asset/img/ProjectsContent/Projects/e/e-section.jpg", "/asset/img/ProjectsContent/Projects/e/e-ipad.jpg", "/asset/img/ProjectsContent/Projects/e/e-mac2.jpg"],
        brief: ["Develop, test and deploy a fully responsive fashion e-commerce website with a modern design using React, React Redux, and Sass.", "Leverage API data fetching techniques to enable advanced filtering options and smooth browsing through product categories.", "A shopping cart with state persistence, allows users to add and manage items effortlessly.", "Powered by Strapi, a headless CMS, it seamlessly integrates content management capabilities, allowing for effortless updates and modifications."],
        stacks: ["react", "sass", "gsap"],
        mouseSecColor: "rgb(170, 200, 167)",
        mouseColor: "rgb(253, 255, 174)",
        liveLink: "https://kk-ecom.000webhostapp.com/",
        repoLink: "https://github.com/KKDEVE/React-Ecommerce-Website.git"
    },
    {
        projectTitle: "Gradient Portfolio Website",
        images: ["/asset/img/ProjectsContent/Projects/p/p1.jpg", "/asset/img/ProjectsContent/Projects/p/p4.jpg", "/asset/img/ProjectsContent/Projects/p/p3.jpg", "/asset/img/ProjectsContent/Projects/p/p0.jpg",],
        brief: ["Design and develop a fully responsive developer portfolio website utilizing React.Js, GSAP, React-scroll, and Sass.", "Using dynamic data management to streamline UI updates and modifications.", "Create an interactive and appealing user interface with intriguing visual details to establish a clear design and content hierarchy.", "Employ sophisticated tools and conduct thorough testing procedures to debug and optimize code for optimal functionality."],
        stacks: ["react", "sass", "gsap"],
        mouseSecColor: "rgb(116, 155, 194)",
        mouseColor: "rgb(255, 225, 225)",
        liveLink: "",
        repoLink: "https://github.com/KKDEVE/Portfolio-Website-Gradient"
    },
    {
        projectTitle: "DATA EYE DASHBOARD",
        images: ["/asset/img/ProjectsContent/Projects/d/d2.jpg", "/asset/img/ProjectsContent/Projects/d/d1.jpg", "/asset/img/ProjectsContent/Projects/d/d3.jpg", "/asset/img/ProjectsContent/Projects/d/d4.jpg",],
        brief: ["Developed a convenient data tracker, adaptable to various scenarios, enabling users to track and visualize their data.", "Introduced a bold UX design inspired by brutalism that attracted users and established a clear visual system."],
        stacks: ["Vue.js", "Chart.js", "CSS"],
        mouseSecColor: "rgba(215, 197, 253, 1)",
        mouseColor: "rgba(253, 255, 231, 1)",
        liveLink: "",
        repoLink: "https://github.com/KKDEVE/Vue-Tracker-Dashboard"
    },
    {
        projectTitle: "Halloween Animated Website",
        images: ["/asset/img/ProjectsContent/Projects/h/h-mock2.jpg", "/asset/img/ProjectsContent/Projects/h/h-mock1.jpg", "/asset/img/ProjectsContent/Projects/h/h-fav.jpg", 'public/asset/img/ProjectsContent/Projects/h/h4.jpg'],
        brief: ["Create a fully responsive design using HTML, JavaScript, and SwiperJS library to ensure optimal viewing experience across devices.", "Incorporate smooth animations in each section of the website to enhance user interaction and create an immersive browsing experience.", "Implement scrollable cards and carouse feature to effectively showcase highlights, ensuring easy access and navigation between different sections."],
        stacks: ["react", "sass", "js"],
        mouseColor: "rgb(255, 225, 225)",
        mouseSecColor: "rgb(144, 161, 125)",
        liveLink: "https://halloween-gz3u.onrender.com/",
        repoLink: "https://github.com/KKDEVE/Responsive-Halloween-Ecommerce-Website"

    },
    {
        projectTitle: "Gamified Productivity Web App [in construction] ",
        images: ["/asset/img/ProjectsContent/Projects/t/t1.jpg"],
        brief: ["Craft a visually endearing user interface with pixel art, implemented with ReactJS and enhanced with Firebase and SASS.", "Devise an engaging in-app reward system to motivate users and enhance their experience.", "Establish a robust backend infrastructure, including data structure design and seamless data integration into the backend.", "Develop a practical to-do list feature with subcategories and a timer functionality to boost users productivity."],
        stacks: ["react", "sass", "js"],
        mouseColor: "rgb(255, 225, 225)",
        mouseSecColor: "rgb(255, 218, 185)",
        liveLink: "",
        repoLink: ""
    }

];
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


                    isLast={index === (projectInfo.length + 1)}

                    mouseColor={project.mouseColor}
                    mouseSecColor={project.mouseSecColor}
                    repoLink={project.repoLink}
                    liveLink={project.liveLink}
                />
            ))}

        </section>

    );
};

export default ProjectsContent;
