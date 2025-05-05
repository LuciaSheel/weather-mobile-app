import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface ForecastProps {
  forecast: {
    list: {
      dt_txt: string;
      main: {
        temp: number;
      };
    }[];
  };
  convertTemp: (temp: number) => number;
}

const Forecast: React.FC<ForecastProps> = ({ forecast, convertTemp }) => {
  const groupedForecast: Record<string, { high: number; low: number }> = forecast.list.reduce((acc, item) => {
    const date = item.dt_txt.split(' ')[0];

    if (!acc[date]) {
      acc[date] = { high: item.main.temp, low: item.main.temp };
    } else {
      acc[date].high = Math.max(acc[date].high, item.main.temp);
      acc[date].low = Math.min(acc[date].low, item.main.temp);
    }

    return acc;
  }, {} as Record<string, { high: number; low: number }>);

  return (
    <ScrollView style={styles.container}>
      {Object.keys(groupedForecast).map((date) => (
        <View key={date} style={styles.dayCard}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.temp}>🌡 High: {convertTemp(groupedForecast[date].high).toFixed(1)}°</Text>
          <Text style={styles.temp}>❄ Low: {convertTemp(groupedForecast[date].low).toFixed(1)}°</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  dayCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    marginHorizontal: 16,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  temp: {
    fontSize: 14,
  },
});

export default Forecast;
