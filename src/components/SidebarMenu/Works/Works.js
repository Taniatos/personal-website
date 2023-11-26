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
        <div className="slide-one">
          <img
            className="photo-one"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/096/155/original/visioquest.png?1694132074"
            alt="First slide"
          />
          <p>VisioQuest App1</p>
          <p>
            The application is based on Clarifai API to detect faces on the
            images.
          </p>
          <button>Web</button>
          <button>Code</button>
        </div>
      ),
    },
    {
      content: (
        <div className="slide-two">
          <img
            className="photo-two"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/096/155/original/visioquest.png?1694132074"
            alt="Second slide"
          />
          <p>VisioQuest App2</p>
          <p>
            The application is based on Clarifai API to detect faces on the
            images.
          </p>
          <button>Web</button>
          <button>Code</button>
        </div>
      ),
    },
    {
      content: (
        <div className="slide-three">
          <img
            className="photo-three"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/096/155/original/visioquest.png?1694132074"
            alt="Third slide"
          />
          <p>VisioQuest App3</p>
          <p>
            The application is based on Clarifai API to detect faces on the
            images.
          </p>
          <button>Web</button>
          <button>Code</button>
        </div>
      ),
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
