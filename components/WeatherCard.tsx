import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WeatherCard({
  city = 'Unknown City',
  province = 'Unknown Province',
  temperature = 'N/A',
  weather = 'N/A',
  humidity = 'N/A'
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.province}>Provinsi: {province}</Text>
      <Text style={styles.city}>Kota: {city}</Text>
      <Text style={styles.temp}>Temperature: {temperature !== 'N/A' ? `${temperature}°C` : temperature}</Text>
      <Text style={styles.desc}>Weather: {weather}</Text>
      <Text style={styles.humidity}>Humidity: {humidity !== 'N/A' ? `${humidity}%` : humidity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  city: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00796B',
    marginBottom: 5,
  },
  temp: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF5722',
  },
  desc: {
    fontSize: 16,
    color: '#00796B',
  },
  humidity: {
    fontSize: 16,
    color: '#00796B',
  },
  province: {
    fontSize: 16,
    color: '#00695c',
    marginBottom: 5,
  },
});
