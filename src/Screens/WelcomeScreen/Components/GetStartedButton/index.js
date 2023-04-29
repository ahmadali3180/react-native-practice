import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const GetStartedButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Get Started</Text>
      <FontAwesome name="angle-right" style={styles.icon} />
    </TouchableOpacity>
  );
};

export default GetStartedButton;
