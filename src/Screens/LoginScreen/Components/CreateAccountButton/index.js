import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const CreateAccountButton = () => {
  const navigation = useNavigation();
  const navToRegister = () => {
    navigation.navigate('Register');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={navToRegister}>
      <Text style={styles.text}>Don't have an account? Create one!</Text>
    </TouchableOpacity>
  );
};

export default CreateAccountButton;
