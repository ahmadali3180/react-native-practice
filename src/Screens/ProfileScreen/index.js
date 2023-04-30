import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Seperator from './Components/Seperator';
import CustomHeader from './Components/CustomHeader';
import PersonalInfo from './Components/PersonalInfo';
import LogoutButton from './Components/LogoutButton';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../../store/reducers/authReducer';

const ProfileScreen = () => {
  const isLoggedIn = useSelector(state => state.rootReducer.auth.isLoggedIn);
  console.log(isLoggedIn);

  if (isLoggedIn) {
    return <MainScreen />;
  } else {
    return <GoToLogin />;
  }
};

const MainScreen = () => {
  const dispatch = useDispatch();
  const logoutButtonPressed = () => {
    dispatch(logout());
  };
  return (
    <View style={styles.container}>
      <CustomHeader />
      <Seperator />
      <PersonalInfo />
      <View style={styles.button}>
        <LogoutButton onPress={logoutButtonPressed} />
      </View>
    </View>
  );
};

const GoToLogin = () => {
  const nav = useNavigation();
  const goToLogin = () => {
    nav.navigate('Login');
  };
  return (
    <TouchableOpacity style={styles.seeAccInfoView} onPress={goToLogin}>
      <Text style={styles.seeAccInfoText}>Login To See Your Profile</Text>
    </TouchableOpacity>
  );
};

export default ProfileScreen;
