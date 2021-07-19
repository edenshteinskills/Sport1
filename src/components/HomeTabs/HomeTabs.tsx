import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScoreBoardScreen from '../../screens/ScoreBoardScreen';
import MainFeedScreen from '../../screens/MainFeedScreen';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();
const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#ffffff',
        inactiveTintColor: '#8b8b8b',
        activeBackgroundColor: '#000000',
        inactiveBackgroundColor: '#000000',
        keyboardHidesTabBar: true,
        labelStyle: {
          fontSize: 12,
          marginBottom: 8,
        },
        style: {
          backgroundColor: '#000000',
        },
      }}>
      <Tab.Screen
        name="Score"
        component={ScoreBoardScreen}
        options={{
          title: 'תוצאות',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{width: 15, height: 15}}
                source={
                  focused
                    ? require('../../../assets/tab_bar_icons/score_green.png')
                    : require('../../../assets/tab_bar_icons/score_board.png')
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={MainFeedScreen}
        options={{
          title: 'ראשי',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{width: 15, height: 15}}
                source={
                  focused
                    ? require('../../../assets/tab_bar_icons/home_green.png')
                    : require('../../../assets/tab_bar_icons/home.png')
                }
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

//const styles = StyleSheet.create({});

export default HomeTabs;
