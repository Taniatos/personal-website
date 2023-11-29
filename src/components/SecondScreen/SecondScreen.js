import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import About from "../SidebarMenu/About/About";
import Contacts from "../SidebarMenu/Contacts/Contacts";
import Works from "../SidebarMenu/Works/Works";
import Experience from "../SidebarMenu/Experience/Experience";
import "./SecondScreen.css";

const SecondScreen = () => {
  return (
    <div className="screen-container">
      <Sidebar />
      <div className="sidebar-content">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/works" element={<Works />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </div>
  );
};

export default SecondScreen;
