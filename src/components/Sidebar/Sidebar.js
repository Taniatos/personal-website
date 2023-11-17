import React, { useState, useEffect } from "react";
import "./Sidebar.css";

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
          <img
            className="logo"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/753/original/icon-down.png?1698114371"
            alt="Logo"
          />
          {!isCollapsed && (
            <span className="logo-text">Tetiana Korchynska</span>
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
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/753/original/icon-down.png?1698114371"
            alt="About Icon"
          />
          {!isCollapsed && "About"}
        </li>
        <li onClick={() => onMenuClick("contacts")}>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/753/original/icon-down.png?1698114371"
            alt="Contacts Icon"
          />
          {!isCollapsed && "Contacts"}
        </li>
        <li onClick={() => onMenuClick("works")}>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/753/original/icon-down.png?1698114371"
            alt="Works Icon"
          />
          {!isCollapsed && "Works"}
        </li>
        <li onClick={() => onMenuClick("designs")}>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/753/original/icon-down.png?1698114371"
            alt="Designs Icon"
          />
          {!isCollapsed && "Designs"}
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
