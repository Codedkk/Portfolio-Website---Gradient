import React from "react";

function Modal({ setOpenModal }) {
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
                    <h1>Write to me at</h1>
                </div>
                {/* TODO */}
                <div className="body">
                    <p>developementk@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default Modal;