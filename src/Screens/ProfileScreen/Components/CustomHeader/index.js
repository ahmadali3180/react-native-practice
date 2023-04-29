import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';

const CustomHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.nameView}>
        <Text style={styles.nameText}>Muhammad Ahmad Ali</Text>
      </View>
      <View style={styles.editIconView}>
        <Feather name="edit-2" style={styles.editIcon} />
      </View>
    </View>
  );
};

export default CustomHeader;
