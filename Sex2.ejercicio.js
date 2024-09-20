import React from 'react';
import { BottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import PantallaInicio from './PantallaInicio';
import PantallaConfiguracion from './PantallaConfiguracion';

const Tab = BottomTabNavigator();

const NavegadorPestañas = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: [
          styles.tabBar,
          {
            elevation: 0, 
            shadowOpacity: 0, 
          },
        ],
        tabStyle: styles.tab,
        labelStyle: styles.label,
        indicatorStyle: styles.indicator,
      }}
    >
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

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 12,
    color: '#333',
  },
  indicator: {
    backgroundColor: '#333',
    height: 2,
  },
});

export default NavegadorPestañas;