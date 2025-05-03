import axios from 'axios';
import Constants from 'expo-constants';

// Fetch weather function
export const fetchWeather = async (city: string) => {
  // Access the API key from app.json using Constants
  const apiKey = Constants.extra.WEATHER_API_KEY;

  // Construct the URLs for current weather and forecast
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  try {
    // Fetch weather and forecast data
    const currentWeatherResponse = await axios.get(currentWeatherUrl);
    const forecastResponse = await axios.get(forecastUrl);

    // Return both current weather and forecast data
    return {
      currentWeatherData: currentWeatherResponse.data,
      forecastData: forecastResponse.data,
    };
  } catch (err: any) {
    // Handle errors and provide meaningful messages
    if (err.response) {
      if (err.response.status === 404) {
        throw new Error('City not found. Please check the spelling.');
      } else {
        throw new Error(`Error: ${err.response.status}. Please try again.`);
      }
    } else if (err.request) {
      throw new Error('Network error. Please check your connection.');
    } else {
      throw new Error('An unexpected error occurred. Please try again.');
    }
  }
};
