import React from "react";

function Modal({ setOpenModal }) {
    //TODO
    const handleButtonMail = () => {
        window.open('mailto:recipient@example.com');
    };
    return (
        <section className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <i className="fas fa-times" onClick={() => {
                        setOpenModal(false);
                    }}> </i>
                </div>
                <div className="title">
                    <h1>Let's connect at</h1>
                </div>
                {/* TODO */}
                <div className="body">
                    <p>developementk@gmail.com</p>

                    <div className="about_social" >
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="about_social_icon">
                            <img src="../../public/asset/img/icon/github.svg" alt="" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="about_social_icon" onClick={handleButtonMail}>
                            <img src="../../public/asset/img/icon/mail.svg" alt="" />

                        </a>

                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="about_social_icon">
                            <img src="../../public/asset/img/icon/linkedin.svg" alt="" />
                        </a>
                        {/* TODO */}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Modal;