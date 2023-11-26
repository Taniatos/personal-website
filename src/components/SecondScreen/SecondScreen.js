import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import About from "../SidebarMenu/About/About";
import Contacts from "../SidebarMenu/Contacts/Contacts";
import Works from "../SidebarMenu/Works/Works";
import Designs from "../SidebarMenu/Designs/Designs";
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
          <Route path="/designs" element={<Designs />} />
        </Routes>
      </div>
      <div className="main-content">
        <h1>hello</h1>
      </div>
    </div>
  );
};

export default SecondScreen;
