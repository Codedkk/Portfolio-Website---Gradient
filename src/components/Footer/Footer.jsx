import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer container">
                <div className="footer-content">
                    <div className="footer-nav">
                        <div>Projects</div>
                        <div>Resume</div>
                        <div>About</div>
                        <div>Work with me</div>
                    </div>
                    <div className="footer-icons">
                        <i className="fa-brands fa-github"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-regular fa-envelope"></i>
                    </div>

                    <div className="footer-by">
                        Developed By <span className="logo">KIKIDENG</span>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Footer