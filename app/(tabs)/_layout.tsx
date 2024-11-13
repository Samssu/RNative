import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // Pastikan Ionicons digunakan untuk ikon tab
import { TabBarIcon } from '@/components/navigation/TabBarIcon'; // Komponen kustom untuk ikon tab
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Portofolio"
        options={{
          title: 'Portofolio',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      {/* Menambahkan navigasi untuk Kalkulator */}
      <Tabs.Screen
        name="kalkulator"
        options={{
          title: 'Kalkulator',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'calculator' : 'calculator-outline'} color={color} size={25} />
          ),
        }}
      />
      {/* Menambahkan navigasi untuk BMI Kalkulator */}
      <Tabs.Screen
        name="bmi"
        options={{
          title: 'BMI Kalkulator',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'calculator' : 'fitness-outline'} color={color} size={25} />
          ),
        }}
      />
      {/* Menambahkan navigasi untuk Cuaca */}
      <Tabs.Screen
        name="cuaca"
        options={{
          title: 'cuaca',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'cloud' : 'cloud-outline'} color={color} size={25} />
          ),
        }}
      />
      
    </Tabs>
  );
}
