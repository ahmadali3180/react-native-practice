import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import Seperator from './Components/Seperator';
import CustomHeader from './Components/CustomHeader';
import PersonalInfo from './Components/PersonalInfo';
import LogoutButton from './Components/LogoutButton';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../../store/reducers/authReducer';

const ProfileScreen = () => {
  const isLoggedIn = useSelector(state => state.rootReducer.auth.isLoggedIn);
  const dispatch = useDispatch();
  const logoutButtonPressed = () => {
    dispatch(logout());
    console.log(isLoggedIn);
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

export default ProfileScreen;
