import React, { useState, useEffect } from "react";
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

  // Menu items
  const menuItems = [
    {
      name: "about",
      icon: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/753/original/icon-down.png?1698114371",
    },
    {
      name: "contacts",
      icon: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/753/original/icon-down.png?1698114371",
    },
    {
      name: "works",
      icon: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/753/original/icon-down.png?1698114371",
    },
    {
      name: "designs",
      icon: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/753/original/icon-down.png?1698114371",
    },
  ];

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
        {menuItems.map((item, index) => (
          <li key={index}>
            <img src={item.icon} alt={`${item.name} Icon`} />
            {!isCollapsed && item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
