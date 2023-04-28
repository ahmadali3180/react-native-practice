import {View, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const CustomHeader = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../../../assets/Images/Logos/logo-ravalbit.jpg')}
        style={styles.logo}
        resizeMethod="auto"
      />
    </View>
  );
};

export default CustomHeader;
