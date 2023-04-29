import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../../../../../store/reducers/authReducer';
import GetStartedButton from '../GetStartedButton';

const CustomFooter = () => {
  const isLoggedIn = useSelector(state => state.rootReducer.auth.isLoggedIn);
  console.log(isLoggedIn);

  const dispatch = useDispatch();

  const navigation = useNavigation();
  // navigation functions
  const navToLogin = () => {
    navigation.navigate('Login');
  };

  const navWithoutLogin = () => {
    dispatch(login());
  };

  return (
    <View style={styles.footer}>
      <Text style={styles.title} onPress={navToLogin}>
        Lets Explore!
      </Text>
      <Text style={styles.text}>Login to your account</Text>
      <Text style={styles.text}>New with Us?</Text>
      <Text style={styles.subTitle} onPress={navWithoutLogin}>
        Continue without logging in.
      </Text>
      <View style={styles.getStartedButton}>
        <GetStartedButton onPress={navToLogin} />
      </View>
    </View>
  );
};

export default CustomFooter;
