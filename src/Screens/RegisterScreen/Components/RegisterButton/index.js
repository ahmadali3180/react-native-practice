import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const RegisterButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Register</Text>
    </TouchableOpacity>
  );
};

export default RegisterButton;
