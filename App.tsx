import * as React from 'react';

//import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import MainFeedScreen from './src/screens/MainFeedScreen';
import {useEffect, useState} from 'react';

const Stack = createStackNavigator();

export default function App() {
  const [hideSplash, setHideSplash] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHideSplash(true);
    }, 1000);
  }, []);

  useEffect(() => {
    hideSplash && SplashScreen.hide();
  }, [hideSplash]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainFeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
