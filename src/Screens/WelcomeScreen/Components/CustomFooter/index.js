import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import GetStartedButton from '../GetStartedButton';

const CustomFooter = () => {
  const isLoggedIn = useSelector(state => state.rootReducer.auth.isLoggedIn);
  console.log(isLoggedIn);

  const navigation = useNavigation();
  // navigation functions
  const navToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.footer}>
      <Text style={styles.title} onPress={navToLogin}>
        Lets Explore!
      </Text>
      <View style={styles.getStartedButton}>
        <GetStartedButton onPress={navToLogin} />
      </View>
    </View>
  );
};

export default CustomFooter;
