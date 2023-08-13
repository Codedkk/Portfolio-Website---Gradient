import React, { useState } from "react";


const Slider = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // const data = [
    //     "public/asset/img/ProjectsContent/Free_iPhone_12_Mockup_3.jpeg",
    //     "public/asset/img/ProjectsContent/Free_Iphone_13_Pro_Mockup_1.jpeg",
    //     "public/asset/img/ProjectsContent/Free_MacBook_Pro_1.jpeg",
    // ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className="slider">
            <div className="slider-container" style={{ transform: `translateX(-${currentSlide * 45.7}vw)` }}>
                <img src={images[0]} alt="" />
                <img src={images[1]} alt="" />
                <img src={images[2]} alt="" />
                <img src={images[3]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <i className="fa-solid fa-angle-left"></i>
                </div>
                <div className="icon" onClick={nextSlide}>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
            </div>
        </div>
    );
};

export default Slider;
