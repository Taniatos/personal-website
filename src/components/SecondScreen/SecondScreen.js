import React, { useState } from "react";
import "./SecondScreen.css";
import Sidebar from "./Sidebar";

const SecondScreen = () => {
  const [content, setContent] = useState("");

  const handleMenuClick = (menuItem) => {
    setContent(menuItem);
  };

  return (
    <section className="screen-container">
      <Sidebar onMenuClick={handleMenuClick} />
      <div className="main-content">
        <h1 className="second-screen-h1">Hello</h1>
        <p>{content}</p>
      </div>
    </section>
  );
};

export default SecondScreen;
