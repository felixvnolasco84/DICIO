"use client"

import { useState } from "react";
import './Slider.css';
import Slide from './Slide';

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
            <Slide title={item.title} description={item.description}/>
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
