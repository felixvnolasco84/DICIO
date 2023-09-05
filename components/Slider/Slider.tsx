"use client"

import { useState } from "react";
import './Slider.css';

const Slider = ({ items }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <div className="slider-content">
        {items.map((item: any, index: any) => (
          <div
            key={index}
            className={`slide ${currentIndex === index ? "active" : ""}`}
          >
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
      <div className="bullet-container">
        {items.map((_: any, index: any) => (
          <div
            key={index}
            className={`bullet ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
