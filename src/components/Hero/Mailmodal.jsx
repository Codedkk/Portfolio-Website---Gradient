import React from "react";

function Modal({ setOpenModal }) {
    //TODO
    const handleButtonMail = () => {
        window.open('mailto:recipient@example.com');
    };
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h1>Let's connect at</h1>
                </div>
                {/* TODO */}
                <div className="body">
                    <p>developementk@gmail.com</p>

                    <div className="about_social" >
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="about_social_icon">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="about_social_icon" onClick={handleButtonMail}>
                            <i className="fa-regular fa-envelope"></i>

                        </a>

                        <div className="about_social_icon" >
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                        {/* TODO */}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Modal;