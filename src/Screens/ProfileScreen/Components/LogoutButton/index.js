import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const LogoutButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Logout</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;
