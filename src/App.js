import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainScreen from "./components/MainScreen/MainScreen";
import SecondScreen from "./components/SecondScreen/SecondScreen";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/second/*" element={<SecondScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
