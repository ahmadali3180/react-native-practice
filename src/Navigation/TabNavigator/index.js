import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from '../HomeStackNavigator';
import SoftwareScreen from '../../Screens/SoftwareScreen';
import CryptoScreen from '../../Screens/CryptoScreen';
import ProfileScreen from '../../Screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native/Libraries/NewAppScreen';

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused, color}) => {
          let iconName;
          console.log(route);
          if (route.name === 'Home') {
            iconName = focused ? 'md-home' : 'md-home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          } else if (route.name === 'Crypto') {
            iconName = focused ? 'logo-bitcoin' : 'logo-bitcoin';
          } else if (route.name === 'Software') {
            iconName = focused ? 'ios-desktop' : 'ios-desktop-outline';
          }

          return (
            <Ionicons name={iconName} size={focused ? 28 : 22} color={color} />
          );
        },
        tabBarActiveTintColor: 'dodgerblue',
        tabBarInactiveTintColor: 'gray',
        tabBarActiveSize: 32,
        tabBarInactiveSize: 24,
        tabBarShowLabel: false,
        headerTintColor: '#F5F3F5',
        headerTitleAlign: 'center',
        headerShown: false,
        tabBarStyle: {
          ...tabBarStyles.tabBarStyle,
          ...tabBarStyles.shadow,
        },
        headerStyle: {
          backgroundColor: 'dodgerblue',
        },
      })}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Software" component={SoftwareScreen} />
      <Tab.Screen name="Crypto" component={CryptoScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
const Tab = createBottomTabNavigator();
const tabBarStyles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1 / 6,
    shadowRadius: 10,
    elevation: 5,
  },
  tabBarStyle: {
    position: 'absolute',
    bottom: 24,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    height: 90,
    paddingBottom: 0,
  },
});
export default TabNavigator;
