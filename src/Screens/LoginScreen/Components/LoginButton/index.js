import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
// import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../../../../store/reducers/authReducer';

const LoginButton = () => {
  const dispatch = useDispatch();
  const {email, password} = useSelector(state => state.rootReducer.auth);

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleLogin}>
      <Text style={styles.text}>Login</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
