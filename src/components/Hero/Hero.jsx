import React from 'react'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero_text">
                <div className="hero_text-first">Koli is a</div>
                <div className="hero_text-second">✷︎ marketing strategist</div>
                <div className="hero_text-third">with ✹empathyn and</div>
                <div className="hero_text-fourth">✶visual lorem</div>
            </div>
            <button className="button button-hero">✧ Say HI! ✧</button>
            <div className="hero_social">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-regular fa-envelope"></i>


            </div>

            <div style={{ height: "100rem" }}></div>

        </div>
    )
}

export default Hero