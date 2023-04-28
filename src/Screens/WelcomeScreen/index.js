import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomHeader from './Components/CustomHeader';
import CustomFooter from './Components/CustomFooter';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <CustomFooter />
    </View>
  );
};

export default WelcomeScreen;
