import React, { useState } from "react";
import "./Works.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Works() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  const slides = [
    {
      content: (
        <div className="slide-content slide-one">
          <img
            className="works-images image-one"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/096/155/original/visioquest.png?1694132074"
            alt="First slide"
          />
          <p className="works-slide-header">VisioQuest App1</p>
          <p className="works-slide-description">
            The application is based on Clarifai API to detect faces on the
            images.
          </p>
          <button className="works-slide-button-one">Web</button>
          <button className="works-slide-button-two">Code</button>
        </div>
      ),
    },
    {
      content: (
        <div className="slide-content slide-two">
          <img
            className="works-images image-two"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/096/155/original/visioquest.png?1694132074"
            alt="Second slide"
          />
          <p className="works-slide-header">VisioQuest App2</p>
          <p className="works-slide-description">
            The application is based on Clarifai API to detect faces on the
            images.
          </p>
          <button className="works-slide-button-one">Web</button>
          <button className="works-slide-button-two">Code</button>
        </div>
      ),
    },
    {
      content: (
        <div className="slide-content slide-three">
          <img
            className="works-images image-three"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/096/155/original/visioquest.png?1694132074"
            alt="Third slide"
          />
          <p className="works-slide-header">VisioQuest App3</p>
          <p className="works-slide-description">
            The application is based on Clarifai API to detect faces on the
            images.
          </p>
          <button className="works-slide-button-one">Web</button>
          <button className="works-slide-button-two">Code</button>
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

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipeLeft = distance > minSwipeDistance;
    const isSwipeRight = distance < -minSwipeDistance;

    if (isSwipeLeft) {
      goToNext();
    } else if (isSwipeRight) {
      goToPrevious();
    }

    // Reset values
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      className="works-page"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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
