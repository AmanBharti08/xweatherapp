import React from "react";

const Cards = ({ data }) => {
  return (
    <div className="weather-cards">
      <div className="weather-card">
        <h2>Temprature</h2>
        <p>{data.current.temp_c}°C</p>
      </div>
      <div className="weather-card">
        <h2>Humidity</h2>
        <p>{data.current.humidity}%</p>
      </div>
      <div className="weather-card">
        <h2>Condition</h2>
        <p>{data.current.condition.text}</p>
      </div>
      <div className="weather-card">
        <h2>Wind Speed</h2>
        <p>{data.current.wind_kph} kph</p>
      </div>
    </div>
  );
};

export default Cards;
