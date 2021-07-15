import * as React from 'react';

//import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import LogoTitle from './src/components/LogoTitle';
import {useEffect, useState} from 'react';
import HomeTabs from './src/components/HomeTabs';
import {SafeAreaView} from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  const [hideSplash, setHideSplash] = useState(false);
  //ffffff
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
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTitleContainerStyle: {
            width: '100%',
          },

          headerTitle: () => <LogoTitle />,
        }}>
        <Stack.Screen name="Home" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
