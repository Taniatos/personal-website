import React from "react";
import "./MainScreen.css";

const MainScreen = () => {
  return (
    <section className="home">
      <h1 className="home-h1">Hello, I am</h1>
      <h2 className="home-h2">Tetiana Korchynska</h2>
      <h3 className="home-h3">Front-End Developer & UI/UX Designer</h3>
      <a href="https://www.google.com/">
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/753/original/icon-down.png?1698114371"
                  alt="down"
                  className="home-icon"
        />
      </a>
    </section>
  );
};

export default MainScreen;
