import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPaperPlane,
  faBriefcase,
  faPaintbrush,
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
        <Link to="/second" className="logo-section">
          {isCollapsed ? (
            <span className="logo-text-collapsed">TK</span>
          ) : (
            <span className="logo-text-expanded">Tetiana Korchynska</span>
          )}
        </Link>
        <img
          className="toggle"
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/964/original/icon-close.png?1698267131"
          alt="Toggle Icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
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
          className={isActive("works")}
          onClick={() => handleMenuItemClick("works")}
        >
          <Link to="/second/works">
            <FontAwesomeIcon icon={faBriefcase} className="menu-icon" />
            {!isCollapsed && "Works"}
          </Link>
        </li>
        <li
          className={isActive("designs")}
          onClick={() => handleMenuItemClick("designs")}
        >
          <Link to="/second/designs">
            <FontAwesomeIcon icon={faPaintbrush} className="menu-icon" />
            {!isCollapsed && "Designs"}
          </Link>
        </li>
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
