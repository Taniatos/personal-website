import React, { useState } from "react";
import "./App.css";
import MainScreen from "./components/MainScreen/MainScreen";
import SecondScreen from "./components/SecondScreen/SecondScreen";

function App() {
 
  const [route, setRoute] = useState("main");

 
  const handleRouteChange = (newRoute) => {
    setRoute(newRoute);
  };

  return (
    <div className="App">
      {}
      {route === "main" ? (
        <MainScreen onRouteChange={handleRouteChange} />
      ) : (
        <SecondScreen />
      )}
    </div>
  );
}

export default App;
