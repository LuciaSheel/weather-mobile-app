import { useState } from 'react';
import { View, Text } from 'react-native';
import { fetchWeather } from './utils/api';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import Forecast from './components/Forecast';
import ErrorMessage from './components/ErrorMessage';
import UnitToggle from './components/UnitToggle';
import Button from './components/Button';

// Define the types for the weather data and forecast data
interface Weather {
  temperature: number;
  description: string;
  icon: string;
}

interface Forecast {
  date: string;
  temperature: number;
  description: string;
  icon: string;
}

function App() {
  // Define state types
  const [city, setCity] = useState<string>(''); // User input city
  const [weather, setWeather] = useState<Weather | null>(null); // Weather data
  const [forecast, setForecast] = useState<Forecast[] | null>(null); // Forecast data
  const [error, setError] = useState<string | null>(null); // Error state
  const [unit, setUnit] = useState<'C' | 'F'>('C'); // "C" or "F"
  const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state

  // Temperature conversion function
  const convertTemp = (temp: number): number => {
    return unit === 'F' ? (temp * 9) / 5 + 32 : temp;
  };

  const handleSearch = async () => {
    if (!city.trim()) {
      setError('Please enter a city name.');
      return;
    }

    setIsLoading(true);
    setError(null); // Reset error

    try {
      const { currentWeatherData, forecastData } = await fetchWeather(city); // Fetch weather data
      setWeather(currentWeatherData);
      setForecast(forecastData); // Store result in state
    } catch (err: any) {
      // Type guard for error handling
      if (err.message) {
        setError(err.message); // If error has a message property
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Weather App</Text>

      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />
      <UnitToggle unit={unit} setUnit={setUnit} />
      <Button
        onClick={handleSearch}
        label="Get Weather"
        isLoading={isLoading}
        disabled={isLoading}
      />

      {error && <ErrorMessage message={error} />}

      {weather && <WeatherDisplay weather={weather} convertTemp={convertTemp} />}

      {forecast && <Forecast forecast={forecast} convertTemp={convertTemp} />}
    </View>
  );
}

export default App;
