import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../../Screens/WelcomeScreen';
import TabNavigator from '../TabNavigator';
import LoginScreen from '../../Screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import HeaderLeft from './Components/HeaderLeft';
import RegisterScreen from '../../Screens/RegisterScreen';

const RootNavigator = () => {
  const {isLoggedIn, user} = useSelector(state => state.rootReducer.auth);

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Root">
          <Stack.Screen
            name="Root"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="WelcomeScreen">
          {/* <Stack.Screen name="Root" component={TabNavigator} /> */}
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            optioons={{title: 'Welcome'}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
              title: 'Log In',
              headerTitle: null,
              headerBackTitle: 'Back',
              headerLeft: () => {
                isLoggedIn ? <HeaderLeft /> : null;
              },
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              headerShown: false,
              title: 'Register',
              headerTitle: null,
              headerBackTitle: 'Back',
              headerLeft: () => {
                isLoggedIn ? <HeaderLeft /> : null;
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

const Stack = createNativeStackNavigator();

export default RootNavigator;
