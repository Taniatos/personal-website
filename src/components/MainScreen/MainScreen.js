import React, { useState, useEffect } from "react";
import "./MainScreen.css";

const MainScreen = ({ onRouteChange }) => {
  const [loaded, setLoaded] = useState(false);
  const [animateBtn, setAnimateBtn] = useState(false);
  const [animateH3, setAnimateH3] = useState(false);
  const [animateH2, setAnimateH2] = useState(false);
  const [animateH1, setAnimateH1] = useState(false);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoaded(true);
      setAnimateBtn(true);
      const timerH3 = setTimeout(() => setAnimateH3(true), 100);
      const timerH2 = setTimeout(() => setAnimateH2(true), 200);
      const timerH1 = setTimeout(() => setAnimateH1(true), 300);

      // Cleanup the animation timers
      return () => {
        clearTimeout(timerH3);
        clearTimeout(timerH2);
        clearTimeout(timerH1);
      };
    }, 300);

    // Cleanup the load timer
    return () => {
      clearTimeout(loadTimer);
    };
  }, []);

  const goToSecondScreen = () => {
    onRouteChange("second"); // we're using 'second' as the route for SecondScreen
  };

  if (!loaded) {
    return <div className="while-loading"></div>;
  }

  return (
    <section className="home">
      <h1 className={`home-h1 ${animateH1 ? "animate" : ""}`}>Hello, I am</h1>
      <h2 className={`home-h2 ${animateH2 ? "animate" : ""}`}>
        Tetiana Korchynska
      </h2>
      <h3 className={`home-h3 ${animateH3 ? "animate" : ""}`}>
        Front-End Developer & UI/UX Designer
      </h3>
      <button
        onClick={goToSecondScreen}
        className={`home-btn ${animateBtn ? "animate" : ""}`}
        id="animated-btn"
      >
        <svg
          width="180px"
          height="60px"
          viewBox="0 0 180 60"
          className="border"
        >
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
        </svg>
        <span>More</span>
      </button>
    </section>
  );
};

export default MainScreen;
