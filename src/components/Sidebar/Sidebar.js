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

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 1160);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <header>
        <div className="logo-section">
          {isCollapsed ? (
            <span className="logo-text-collapsed">TK</span>
          ) : (
            <span className="logo-text-expanded">Tetiana Korchynska</span>
          )}
        </div>
        <img
          className="toggle"
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/964/original/icon-close.png?1698267131"
          alt="Toggle Icon"
          onClick={toggleSidebar}
        />
      </header>
      <ul className="menu-links">
        <li onClick={() => setIsCollapsed(window.innerWidth < 1160)}>
          <Link to="/second/about">
            <FontAwesomeIcon icon={faUser} className="menu-icon" />
            {!isCollapsed && "About"}
          </Link>
        </li>
        <li onClick={() => setIsCollapsed(window.innerWidth < 1160)}>
          <Link to="/second/contacts">
            <FontAwesomeIcon icon={faPaperPlane} className="menu-icon" />
            {!isCollapsed && "Contacts"}
          </Link>
        </li>
        <li onClick={() => setIsCollapsed(window.innerWidth < 1160)}>
          <Link to="/second/works">
            <FontAwesomeIcon icon={faBriefcase} className="menu-icon" />
            {!isCollapsed && "Works"}
          </Link>
        </li>
        <li onClick={() => setIsCollapsed(window.innerWidth < 1160)}>
          <Link to="/second/designs">
            <FontAwesomeIcon icon={faPaintbrush} className="menu-icon" />
            {!isCollapsed && "Designs"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
