import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const ProfileScreen = () => {
  const name = 'Muhammad Ahmad Ali';
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.nameView}>
          <Text style={styles.nameText}>{name}</Text>
        </View>
      </View>
      <View style={styles.personalInfoView}>
        <Text>personalInfoView</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
