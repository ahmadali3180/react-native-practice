import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const PersonalInfo = () => {
  return (
    <View style={styles.personalInfoView}>
      <View style={styles.sectionView}>
        <Text style={styles.title}>Registered Email:</Text>
        <View style={styles.subTitleView}>
          <Text style={styles.subTitle}>email@example.com</Text>
        </View>
      </View>
      <View style={styles.sectionView}>
        <Text style={styles.title}>Registered Phone:</Text>
        <View style={styles.subTitleView}>
          <Text style={styles.subTitle}>1234567890</Text>
        </View>
      </View>
      <View style={styles.sectionView}>
        <Text style={styles.title}>Registered Address:</Text>
        <View style={styles.subTitleView}>
          <Text style={styles.subTitle}>123 street, 456 road, A.B.C</Text>
        </View>
      </View>
    </View>
  );
};

export default PersonalInfo;
