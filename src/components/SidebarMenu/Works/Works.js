import React, { useState } from "react";
import "./Works.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Works() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      content: (
        <div>
          {" "}
          <img
            className="photo1"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/096/155/original/visioquest.png?1694132074"
            alt="First slide"
          />
          Slide 1 Content Here{" "}
        </div>
      ),
    },
    {
      content: <div>Slide 2 Content Here</div>,
    },
    {
      content: <div>Slide 3 Content Here</div>,
    },
  ];

  const goToPrevious = () => {
    const isFirstSlide = activeIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = activeIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  return (
    <div className="works-page">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === activeIndex ? "active" : ""}`}
        >
          {slide.content}
        </div>
      ))}
      <div className="carousel-controls">
        <button className="carousel-button" onClick={goToPrevious}>
          <FontAwesomeIcon icon={faCircleChevronLeft} />
        </button>
        <button className="carousel-button" onClick={goToNext}>
          <FontAwesomeIcon icon={faCircleChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default Works;
