import React from 'react';
import { BottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import PantallaInicio from './PantallaInicio';
import PantallaConfiguracion from './PantallaConfiguracion';

const Tab = BottomTabNavigator();

const NavegadorPestañas = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={PantallaInicio}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Configuración"
        component={PantallaConfiguracion}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavegadorPestañas;