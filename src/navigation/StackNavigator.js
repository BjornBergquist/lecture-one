import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationPaths from './navigationPaths';

import HomeScreen from '../screens/HomeScreen';
import ImageScreen from '../screens/ImageScreen';
import CounterScreen from '../screens/CounterScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={navigationPaths.homeScreen} component={HomeScreen} />
          <Stack.Screen name={navigationPaths.imageScreen} component={ImageScreen} />
          <Stack.Screen name={navigationPaths.counterScreen} component={CounterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default StackNavigator
