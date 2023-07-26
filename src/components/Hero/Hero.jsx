import React from 'react'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero_text">
                <span >Fili is &nbsp;
                    <span>a&nbsp;
                        <div className="hero_text-first">
                            <span> ✷︎ </span>
                            <span>creative developer,</span>
                        </div>&nbsp;</span>
                    <span>
                        <div className="hero_text-second">
                            <span >✎︎ </span>
                            <span> fusing usability with <span className="hero_text-style">style</span></span>
                        </div>&nbsp;</span>
                    {/* <span>with
                        <div className="hero_text-third">
                            <span>✹︎ </span>
                            <span >visual lorem</span>
                        </div>&nbsp;
                    </span> */}

                </span>
                {/* <span className="hero_text-first">
                    <span>Koli is a</span>&nbsp;


                    <span className="hero_text-second">
                        <span><span>✷︎ </span><span>marketing strategist</span></span>&nbsp;</span>

                    <span className="hero_text-third"><span>✹</span><span><span>empathyn</span> and</span>&nbsp;
                    </span>
                    <span className="hero_text-fourth"><span>✶</span><span>visual lorem</span>&nbsp;</span>
                </span> */}

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