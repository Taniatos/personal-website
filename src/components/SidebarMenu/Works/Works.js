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
    // Slide 1
    {
      content: (
        <div className="slide-content slide-one">
          <img
            className="works-images image-one"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/084/original/visioquest.png?1701044250"
            alt="First slide"
          />
          <p className="works-slide-header">VisioQuest App</p>
          <p className="works-slide-description">
            The application is based on Clarifai API to detect faces on the
            images.
          </p>
          <a
            href="https://face-recognition-visioquest.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="works-slide-button-one">Web</button>
          </a>
          <a
            href="https://github.com/Taniatos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="works-slide-button-two">Code</button>
          </a>
        </div>
      ),
    },
    // Slide 2
    {
      content: (
        <div className="slide-content slide-two">
          <img
            className="works-images image-two"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/081/original/wordle.png?1701043495"
            alt="Second slide"
          />
          <p className="works-slide-header">Wordle</p>
          <p className="works-slide-description">
            Wordle Clone App is built in React using hooks. It offers players a
            challenge to deduce a five-letter word in six attempts.
          </p>
          <a
            href="https://reactjs-wordle-clone.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="works-slide-button-one">Web</button>
          </a>
          <a
            href="https://github.com/Taniatos/wordle-clone-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="works-slide-button-two">Code</button>
          </a>
        </div>
      ),
    },
    // Slide 3
    {
      content: (
        <div className="slide-content slide-three">
          <img
            className="works-images image-three"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/080/original/weather.png?1701043478"
            alt="Third slide"
          />
          <p className="works-slide-header">Weather App</p>
          <p className="works-slide-description">
            Built in React on the basis of the SheCodes Weather API for the
            real-life forecast.
          </p>
          <a
            href="https://react-weather-application-tania.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="works-slide-button-one">Web</button>
          </a>
          <a
            href="https://github.com/Taniatos/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="works-slide-button-two">Code</button>
          </a>
        </div>
      ),
    },
    // Slide 4
    {
      content: (
        <div className="slide-content slide-four">
          <img
            className="works-images image-four"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/074/original/barber.png?1701041052"
            alt="Fourth slide"
          />
          <p className="works-slide-header">Barbershop Landing Page</p>
          <p className="works-slide-description">
            Responsive dark-themed landing page built in React to demonstrate my
            designing and coding skills in one project.
          </p>

          <a
            href="LINK-TO-WEB-VERSION"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="works-slide-button-one">Web</button>
          </a>
          <a
            href="LINK-TO-CODE-REPOSITORY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="works-slide-button-two">Code</button>
          </a>
        </div>
      ),
    },
    // Slide 5
    {
      content: (
        <div className="slide-content slide-five">
          <img
            className="works-images image-five"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/078/original/dictionary.png?1701043447"
            alt="Fifth slide"
          />
          <p className="works-slide-header">Dictionary App</p>
          <p className="works-slide-description">
            An application built in React serves as an online dictionary that
            showcases all the meanings of the searched word and its related
            images.
          </p>

          <a
            href="LINK-TO-WEB-VERSION"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="works-slide-button-one">Web</button>
          </a>
          <a
            href="LINK-TO-CODE-REPOSITORY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="works-slide-button-two">Code</button>
          </a>
        </div>
      ),
    },
    // Slide 6
    {
      content: (
        <div className="slide-content slide-six">
          <img
            className="works-images image-six"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/079/original/travel.png?1701043459"
            alt="Sixth slide"
          />
          <p className="works-slide-header">City Landing Page</p>
          <p className="works-slide-description">
            Built using HTML, CSS, and Bootstrap, the project aims to
            demonstrate advanced responsive techniques.
          </p>

          <a
            href="LINK-TO-WEB-VERSION"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="works-slide-button-one">Web</button>
          </a>
          <a
            href="LINK-TO-CODE-REPOSITORY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="works-slide-button-two">Code</button>
          </a>
        </div>
      ),
    },
    // Slide 7
    {
      content: (
        <div className="slide-content slide-seven">
          <img
            className="works-images image-seven"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/077/original/clock.png?1701043440"
            alt="Seventh slide"
          />
          <p className="works-slide-header">World Clock App</p>
          <p className="works-slide-description">
            The project was built using HTML, CSS, JavaScript and real-life data
            from Moment.js.
          </p>

          <a
            href="LINK-TO-WEB-VERSION"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="works-slide-button-one">Web</button>
          </a>
          <a
            href="LINK-TO-CODE-REPOSITORY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="works-slide-button-two">Code</button>
          </a>
        </div>
      ),
    },
    // Slide 8
    {
      content: (
        <div className="slide-content slide-eight">
          <img
            className="works-images image-eight"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/085/original/charitable.png?1701044795"
            alt="Eighth slide"
          />
          <p className="works-slide-header">Charitable Foundation Website</p>
          <p className="works-slide-description">
            Real-life project currently in progress. It will be serving as a
            virtual business card of Andrii Kviatkovskii Charitable Foundation
            to help raise money for the military and humanitarian purposes of
            the Armed Forces of Ukraine and families affected by the ongoing
            war.
          </p>

          <a
            href="LINK-TO-WEB-VERSION"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="works-slide-button-one">Web</button>
          </a>
          <a
            href="LINK-TO-CODE-REPOSITORY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="works-slide-button-two">Code</button>
          </a>
        </div>
      ),
    },
    // Slide 9
    {
      content: (
        <div className="slide-content slide-nine">
          <img
            className="works-images image-nine"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/105/179/original/9_designs.png?1701131005"
            alt="Ninth slide"
          />
          <p className="works-slide-header">Designs</p>
          <p className="works-slide-description">
            Apart from coding, I also enjoy designing. Visit my Behance profile
            to check Web and Mobile UI/UX cases.
          </p>

          <a
            href="https://www.behance.net/0031c316"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="works-slide-button-three">Benahce</button>
          </a>
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
