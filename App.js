import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationPaths from './src/navigation/navigationPaths';
import { MessageProvider } from './src/shared/provider/MessageProvider';

import HomeScreen from './src/screens/HomeScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import EffectScreen from './src/screens/EffectScreen';
import SenderScreen from './src/screens/SenderScreen';
import ReceiverScreen from './src/screens/ReceiverScreen';
import ApiScreen from './src/screens/ApiScreen';
import LayoutScreen from './src/screens/LayoutScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <MessageProvider>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={navigationPaths.homeScreen} component={HomeScreen} />
        <Stack.Screen name={navigationPaths.imageScreen} component={ImageScreen} />
        <Stack.Screen name={navigationPaths.counterScreen} component={CounterScreen} />
        <Stack.Screen name={navigationPaths.effectScreen} component={EffectScreen} />
        <Stack.Screen name={navigationPaths.senderSceen} component={SenderScreen} />
        <Stack.Screen name={navigationPaths.receiverScreen} component={ReceiverScreen} />
        <Stack.Screen name={navigationPaths.apiScreen} component={ApiScreen} />
        <Stack.Screen name={navigationPaths.layoutScreen} component={LayoutScreen} />
      </Stack.Navigator>
       </NavigationContainer>
    </MessageProvider>
  );
}

export default App