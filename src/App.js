import React, { useState } from 'react';
import './App.css';
import WeatherCard from './WeatherCard';
import getWeather from './weatherAPI';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!city) return;

    setLoading(true);
    setError('');
    try {
      const data = await getWeather(city);
      setWeatherData(data);
    } catch (err) {
      // Check if there's a response from the API
      if (err.response) {
        // The API sent a response with an error code (e.g., 404 or 401)
        setError(`Error: ${err.response.data.message}`);
      } else {
        // The error is not from the API, it could be network-related
        setError('Error: Unable to fetch weather data. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p>Loading...</p>}

      {error && <p className="error">{error}</p>}

      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
