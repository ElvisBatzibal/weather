import React from "react";

import WeatherCard from "./components/WeatherCard/component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherCard temp="20"></WeatherCard>
      <WeatherCard temp="12"></WeatherCard>
      <WeatherCard temp="40"></WeatherCard>
    </div>
  );
}

export default App;
