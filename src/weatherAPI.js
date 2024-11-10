import axios from 'axios';

// Your OpenWeatherMap API key here
const API_KEY = 'YOUR_API_KEY';  // Replace this with your actual API key

const getWeather = async (city) => {
  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric', // Change to 'imperial' for Fahrenheit
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to fetch weather data');
    }
  } catch (error) {
    // Detailed error message for debugging
    console.error('Error fetching weather data:', error.response ? error.response.data : error.message);
    throw error;  // Re-throw the error to be caught in App.js
  }
};

export default getWeather;
