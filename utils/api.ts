import axios from 'axios';
import Constants from 'expo-constants';

export const fetchWeather = async (city: string) => {
  const weatherApiKey = Constants.expoConfig?.extra?.weatherApiKey;

  if (!weatherApiKey) {
    throw new Error('API key is missing. Please set WEATHER_API_KEY in your .env file.');
  }

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}&units=metric`;

  try {
    const currentWeatherResponse = await axios.get(currentWeatherUrl);
    const forecastResponse = await axios.get(forecastUrl);

    return {
      currentWeatherData: currentWeatherResponse.data,
      forecastData: forecastResponse.data,
    };
  } catch (err: any) {
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
