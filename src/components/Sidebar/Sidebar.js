import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPaperPlane,
  faBriefcase,
  faPaintbrush,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ onMenuClick }) => {
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
        <li onClick={() => onMenuClick("about")}>
          <FontAwesomeIcon icon={faUser} className="menu-icon" />
          {!isCollapsed && "About"}
        </li>
        <li onClick={() => onMenuClick("contacts")}>
          <FontAwesomeIcon icon={faPaperPlane} className="menu-icon" />
          {!isCollapsed && "Contacts"}
        </li>
        <li onClick={() => onMenuClick("works")}>
          <FontAwesomeIcon icon={faBriefcase} className="menu-icon" />
          {!isCollapsed && "Works"}
        </li>
        <li onClick={() => onMenuClick("designs")}>
          <FontAwesomeIcon icon={faPaintbrush} className="menu-icon" />
          {!isCollapsed && "Designs"}
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
