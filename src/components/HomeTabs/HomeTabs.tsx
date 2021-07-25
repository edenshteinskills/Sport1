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
        name="More"
        component={ScoreBoardScreen}
        options={{
          title: 'עוד',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{width: 15, height: 15}}
                source={
                  focused
                    ? require('../../../assets/tab_bar_icons/more_green.png')
                    : require('../../../assets/tab_bar_icons/more.png')
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Brodcast"
        component={ScoreBoardScreen}
        options={{
          title: 'שידורים',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{width: 18, height: 18}}
                source={
                  focused
                    ? require('../../../assets/tab_bar_icons/live_green.png')
                    : require('../../../assets/tab_bar_icons/live.png')
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="VOD"
        component={ScoreBoardScreen}
        options={{
          title: 'VOD',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{width: 22, height: 15}}
                source={
                  focused
                    ? require('../../../assets/tab_bar_icons/vod_green.png')
                    : require('../../../assets/tab_bar_icons/vod.png')
                }
              />
            );
          },
        }}
      />
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
