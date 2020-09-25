import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [weather, setWeather] = useState({});
  const [textInput, setTextInput] = useState("Kerala");
  useEffect(() => {
    fetch(`http://localhost:${process.env.PORT || 7000}/?location=${textInput}`)
      .then((response) => response.json())
      .then((json) => setWeather(json));
  }, [textInput]);
  return (
    <div className="App">
      <div>
        <h1>Weather App</h1>
      </div>

      <div>
        <input
          placeholder="Your location here"
          type="text"
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
        />
      </div>
      <div className="card">
        <p>Temperature:{weather.temperature}</p>
        <p>Feels like :{weather.feelslike}</p>
        <p>Location :{weather.location}</p>
      </div>
    </div>
  );
}

export default App;
