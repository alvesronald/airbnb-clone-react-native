import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestsScreen from '../screens/Guests';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Destination Search"
          component={DestinationSearchScreen}
          options={{
            title: 'Search your destination',
          }}
        />
        <Stack.Screen
          name="Guests"
          component={GuestsScreen}
          options={{
            title: 'How many people?',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
