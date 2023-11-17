import React, { useState } from "react";
import "./SecondScreen.css";
import Sidebar from "../Sidebar/Sidebar";
import Works from "../Works/Works";
// Import other components like About, Contacts, etc.

const SecondScreen = () => {
  const [activePage, setActivePage] = useState("");

  const handleMenuClick = (menuItem) => {
    setActivePage(menuItem);
  };

  const renderContent = () => {
    switch (activePage) {
      case "works":
        return <Works />;
      // Add cases for other menu items like 'about', 'contacts', etc.
      default:
        return <h1>Hello</h1>; // Default content
    }
  };

  return (
    <section className="screen-container">
      <Sidebar onMenuClick={handleMenuClick} />
      <div className="main-content">{renderContent()}</div>
    </section>
  );
};

export default SecondScreen;
