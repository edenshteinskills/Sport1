import * as React from 'react';

//import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import MainFeedScreen from './src/screens/MainFeedScreen';
import {useEffect} from 'react';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainFeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
