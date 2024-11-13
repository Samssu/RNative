import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const BMICalculatorApp = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) {
      Alert.alert('Error', 'Please enter both weight and height.');
      return;
    }

    const bmiValue = (parseFloat(weight) / Math.pow(parseFloat(height) / 100, 2)).toFixed(2);
    setBmi(bmiValue);
    categorizeBMI(bmiValue);
  };

  const categorizeBMI = (bmiValue) => {
    if (bmiValue < 18.5) {
      setBmiCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) { 
      setBmiCategory('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setBmiCategory('Overweight');
    } else {
      setBmiCategory('Obese');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <Button title="Calculate BMI" onPress={calculateBMI} color="#28A745" />

      {bmi && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Your BMI is: {bmi}</Text>
          <Text style={styles.resultText}>Category: {bmiCategory}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#28A745',
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    marginVertical: 10,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    color: '#333',
  },
});

export default BMICalculatorApp;
