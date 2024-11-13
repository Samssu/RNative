import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import WeatherCard from '@/components/WeatherCard'; // Komponen untuk menampilkan data cuaca

const API_KEY = 'd4275b512abd94b31cda97b85645a208'; // Ganti dengan API key Anda

// Daftar kota beserta provinsinya
const CITIES = [
  { city: 'Banda Aceh', province: 'Aceh' },
  { city: 'Medan', province: 'Sumatera Utara' },
  { city: 'Palembang', province: 'Sumatera Selatan' },
  { city: 'Surabaya', province: 'Jawa Timur' },
  { city: 'Jakarta', province: 'DKI Jakarta' },
  { city: 'Bandung', province: 'Jawa Barat' },
  { city: 'Denpasar', province: 'Bali' },
  { city: 'Padang', province: 'Sumatera Barat' },
  { city: 'Pekanbaru', province: 'Riau' },
  { city: 'Pontianak', province: 'Kalimantan Barat' },
  { city: 'Balikpapan', province: 'Kalimantan Timur' },
  { city: 'Samarinda', province: 'Kalimantan Timur' },
  { city: 'Manado', province: 'Sulawesi Utara' },
  { city: 'Makassar', province: 'Sulawesi Selatan' },
  { city: 'Kupang', province: 'Nusa Tenggara Timur' },
  { city: 'Mataram', province: 'Nusa Tenggara Barat' },
  { city: 'Jayapura', province: 'Papua' },
  { city: 'Ambon', province: 'Maluku' }
];


export default function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await Promise.all(
          CITIES.map(async (location) => {
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?q=${location.city}&appid=${API_KEY}&units=metric`
            );
            return { ...response.data, province: location.province }; // Gabungkan data cuaca dengan provinsi
          })
        );
        setWeatherData(data); // Set semua data cuaca dari API
        setLoading(false);
      } catch (error) {
        setError('Data Gagal, Silakan coba lagi :D');
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informasi Cuaca di Kota-Kota Indonesia</Text>
      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <ScrollView>
          {weatherData.map((weather, index) => (
            <WeatherCard
              key={index}
              city={weather.name}
              province={weather.province} // Tampilkan nama provinsi
              temperature={weather.main.temp}
              weather={weather.weather[0].description}
              humidity={weather.main.humidity}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796B',
    marginBottom: 20,
    textAlign: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#00796B',
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});
