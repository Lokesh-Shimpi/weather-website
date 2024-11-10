import React from 'react';
import './WeatherCard.css';

function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <div className="weather-info">
        <p><strong>Temperature:</strong> {data.main.temp}°C</p>
        <p><strong>Weather:</strong> {data.weather[0].description}</p>
        <p><strong>Humidity:</strong> {data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> {data.wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;
