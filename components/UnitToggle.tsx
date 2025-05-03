// components/UnitToggle.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface UnitToggleProps {
  unit: 'C' | 'F';
  setUnit: (unit: 'C' | 'F') => void;
}

const UnitToggle: React.FC<UnitToggleProps> = ({ unit, setUnit }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setUnit('C')}
        style={[styles.button, unit === 'C' && styles.active]}
      >
        <Text style={styles.text}>°C</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setUnit('F')}
        style={[styles.button, unit === 'F' && styles.active]}
      >
        <Text style={styles.text}>°F</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 12,
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 6,
    marginHorizontal: 5,
    backgroundColor: '#ddd',
  },
  active: {
    backgroundColor: '#4caf50',
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default UnitToggle;
