import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from '../screens/HomeScreen';
import RideDetailScreen from '../screens/RideDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ReportScreen from '../screens/ReportScreen';
import SuggestionsScreen from '../screens/SuggestionsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="RideDetail" component={RideDetailScreen} options={{ title: 'Detalle del Viaje' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
        <Stack.Screen name="Messages" component={MessagesScreen} options={{ title: 'Mensajes' }} />
        <Stack.Screen name="Report" component={ReportScreen} options={{ title: 'Denuncias' }} />
        <Stack.Screen name="Suggestions" component={SuggestionsScreen} options={{ title: 'Sugerencias' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
