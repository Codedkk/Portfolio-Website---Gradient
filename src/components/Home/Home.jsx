import React from 'react';
import Hero from "../Hero/Hero";
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import About from "../About/About"



const Home = () => {
    return (
        <div className='home'>
            <Hero />
            <Projects />
            <Resume />
            <About />

        </div>
    )
}

export default Home