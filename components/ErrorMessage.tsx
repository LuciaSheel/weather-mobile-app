// components/ErrorMessage.tsx
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  text: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ErrorMessage;
