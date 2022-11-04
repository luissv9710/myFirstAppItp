// Trabajo realizado en clase del 01 noviembre 2022
// -----------------------------------------------------
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import About from './src/pages/About';
import Picture from './src/pages/Picture';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PictureScreen" component={Picture} />
        <Stack.Screen name="AboutScreen" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
