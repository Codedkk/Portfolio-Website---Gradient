import React, { useState } from "react";


const Slider = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imageWidth, setImageWidth] = useState(0);
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className="slider">
            <div className="slider-container" style={{ transform: `translateX(-${currentSlide * imageWidth}px)` }}>
                <img src={images[0]} alt="" onLoad={(e) => setImageWidth(e.target.offsetWidth)} />
                <img src={images[1]} alt="" onLoad={(e) => setImageWidth(e.target.offsetWidth)} />
                <img src={images[2]} alt="" onLoad={(e) => setImageWidth(e.target.offsetWidth)} />
                <img src={images[3]} alt="" onLoad={(e) => setImageWidth(e.target.offsetWidth)} />
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
