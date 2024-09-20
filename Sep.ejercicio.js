import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details with Condition 1"
        onPress={() => navigation.navigate('Details', { condition: 1 })}
      />
      <Button
        title="Go to Details with Condition 2"
        onPress={() => navigation.navigate('Details', { condition: 2 })}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { condition } = route.params; 

  const handleNavigate = () => {
    if (condition === 1) {
      navigation.navigate('Profile'); 
    } else if (condition === 2) {
      navigation.navigate('Settings'); 
    } else {
      alert('Condition not met');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>Condition: {JSON.stringify(condition)}</Text>
      <Button
        title="Proceed Based on Condition"
        onPress={handleNavigate}
      />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
