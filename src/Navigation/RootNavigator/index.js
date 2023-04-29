import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../../Screens/WelcomeScreen';
import TabNavigator from '../TabNavigator';
import LoginScreen from '../../Screens/AuthScreens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import HeaderLeft from './Components/HeaderLeft';

const RootNavigator = () => {
  const isLoggedIn = useSelector(s => s.rootReducer.auth.isLoggedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <Stack.Screen name="Root" component={TabNavigator} />
        ) : (
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            optioons={{title: 'Welcome'}}
          />
        )}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: true,
            title: 'Log In',
            headerTitle: null,
            headerBackTitle: 'Back',
            // eslint-disable-next-line react/no-unstable-nested-components
            headerLeft: () => {
              return <HeaderLeft />;
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

export default RootNavigator;
