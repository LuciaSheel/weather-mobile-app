import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Pressable, Text, StyleSheet } from 'react-native';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Pressable onPress={toggleTheme} style={styles.button}>
      <Text style={styles.icon}>{theme === 'light' ? '🌙' : '☀️'}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    padding: 10,
    margin: 10,
  },
  icon: {
    fontSize: 24,
  },
});

export default ThemeToggle;
