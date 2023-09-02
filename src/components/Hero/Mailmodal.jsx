import React from "react";

function Modal({ setOpenModal }) {
    //TODO
    const handleButtonMail = () => {
        window.open('mailto:KKxDEV@proton.me');
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
                    <h1>Let's connect at 📝</h1>
                </div>
                {/* TODO */}
                <div className="body">
                    <p>KK_DEV@OUTLOOK.COM</p>

                    <div className="about_social" >
                        <a href="https://github.com/KKDEVE" target="_blank" rel="noopener noreferrer" className="about_social_icon">
                            <img src="../../public/asset/img/icon/github.svg" alt="" />
                        </a>
                        <img src="../../public/asset/img/icon/mail.svg" alt="" className="about_social_icon" onClick={handleButtonMail} />



                        <a href="https://www.linkedin.com/in/kiki-deng" target="_blank" rel="noopener noreferrer" className="about_social_icon">
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