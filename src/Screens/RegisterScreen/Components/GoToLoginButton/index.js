import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const GoToLoginButton = () => {
  const navigation = useNavigation();
  const navToLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={navToLogin}>
      <Text style={styles.text}>Already have an account? Login!</Text>
    </TouchableOpacity>
  );
};

export default GoToLoginButton;
