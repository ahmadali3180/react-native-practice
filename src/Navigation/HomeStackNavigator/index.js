import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/HomeScreen';

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeStack"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeStack" component={HomeScreen} />
    </Stack.Navigator>
  );
};
const Stack = createNativeStackNavigator();

export default HomeStackNavigator;
