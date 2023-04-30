import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomField from './Components/CustomField';
import {setEmail, setPassword} from '../../../store/reducers/authReducer';
import {useDispatch, useSelector} from 'react-redux';
import LoginButton from './Components/LoginButton';
import CreateAccountButton from './Components/CreateAccountButton';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const {email, password} = useSelector(state => state.rootReducer.auth);

  const handleEmailChange = text => {
    dispatch(setEmail(text));
  };
  const handlePasswordChange = text => {
    dispatch(setPassword(text));
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginTextView}>
        <Text style={styles.title}>Login To Your Account</Text>
      </View>
      <View style={styles.inputView}>
        <CustomField
          placeholder={'Email'}
          value={email}
          setValue={handleEmailChange}
          autoCapitalize={'none'}
        />
        <CustomField
          placeholder={'Password'}
          isSecureEntry={true}
          value={password}
          setValue={handlePasswordChange}
        />
      </View>
      <View style={styles.loginButtonView}>
        <LoginButton />
      </View>
      <View style={styles.createAccountView}>
        <CreateAccountButton />
      </View>
    </View>
  );
};

export default LoginScreen;
