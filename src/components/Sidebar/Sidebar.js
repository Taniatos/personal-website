import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faUser,
  faPaperPlane,
  faLaptopCode,
  faBriefcase,
  // faComment,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 1160);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 1160);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    setIsCollapsed(window.innerWidth < 1160);
  };

  const isActive = (menuItem) => (activeMenuItem === menuItem ? "active" : "");

  return (
    <nav className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <header>
        <Link to="/second/about" className="logo-section">
          {isCollapsed ? (
            <span className="logo-text-collapsed">TK</span>
          ) : (
            <span className="logo-text-expanded">Tetiana Korchynska</span>
          )}
        </Link>
        <div
          className="sidebar-toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <FontAwesomeIcon icon={faCircleChevronRight} className="toggle" />
        </div>
      </header>
      <ul className="menu-links">
        <li
          className={isActive("about")}
          onClick={() => handleMenuItemClick("about")}
        >
          <Link to="/second/about">
            <FontAwesomeIcon icon={faUser} className="menu-icon" />
            {!isCollapsed && "About"}
          </Link>
        </li>
        <li
          className={isActive("experience")}
          onClick={() => handleMenuItemClick("experience")}
        >
          <Link to="/second/experience">
            <FontAwesomeIcon icon={faBriefcase} className="menu-icon" />
            {!isCollapsed && "Experience"}
          </Link>
        </li>
        <li
          className={isActive("works")}
          onClick={() => handleMenuItemClick("works")}
        >
          <Link to="/second/works">
            <FontAwesomeIcon icon={faLaptopCode} className="menu-icon" />
            {!isCollapsed && "Projects"}
          </Link>
        </li>
        {/* <li
          className={isActive("references")}
          onClick={() => handleMenuItemClick("references")}
        >
          <Link to="/second/references">
            <FontAwesomeIcon icon={faComment} className="menu-icon" />
            {!isCollapsed && "References"}
          </Link>
        </li> */}
        <li
          className={isActive("contacts")}
          onClick={() => handleMenuItemClick("contacts")}
        >
          <Link to="/second/contacts">
            <FontAwesomeIcon icon={faPaperPlane} className="menu-icon" />
            {!isCollapsed && "Contacts"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
