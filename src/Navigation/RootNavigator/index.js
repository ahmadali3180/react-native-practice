import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../../Screens/WelcomeScreen';
import TabNavigator from '../TabNavigator';
import LoginScreen from '../../Screens/AuthScreens/LoginScreen';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
// import {useSelector} from 'react-redux';

const RootNavigator = () => {
  // const isLoggedIn = useSelector(s => s.rootReducer.auth.isLoggedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* {isLoggedIn ? (
        <Stack.Screen name="Root" component={TabNavigator} />
      ) : (
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      )} */}
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Root" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

export default RootNavigator;
