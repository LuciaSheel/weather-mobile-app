// components/WeatherDisplay.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WeatherData {
  name: string;
  sys: { country: string };
  main: { temp: number; humidity: number };
  wind: { speed: number };
}

interface WeatherDisplayProps {
  weather: WeatherData;
  convertTemp: (temp: number) => number;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather, convertTemp }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>
        {weather.name}, {weather.sys.country}
      </Text>
      <Text>🌡 Temperature: {convertTemp(weather.main.temp).toFixed(1)}°</Text>
      <Text>💧 Humidity: {weather.main.humidity}%</Text>
      <Text>🌬 Wind Speed: {weather.wind.speed} m/s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 16,
    backgroundColor: '#f3f3f3',
    borderRadius: 12,
  },
  city: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default WeatherDisplay;
