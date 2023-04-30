import {View, Text, Alert} from 'react-native';
import React from 'react';
// import auth from 'firebase/auth';
import styles from './styles';
import CustomField from './Components/CustomField';
import {
  setEmail,
  setPassword,
  setFirstName,
  setLastName,
  setUser,
} from '../../../store/reducers/authReducer';
import {useDispatch, useSelector} from 'react-redux';
import RegisterButton from './Components/RegisterButton';
import GoToLoginButton from './Components/GoToLoginButton';
import {setUserLoading} from '../../../store/reducers/authReducer';
import {auth, firestore} from '../../../config/firebase';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const {email, password, firstName, lastName, user} = useSelector(
    state => state.rootReducer.auth,
  );
  console.log(user);

  const handleFirstNameChange = text => {
    dispatch(setFirstName(text));
  };
  const handleLastNameChange = text => {
    dispatch(setLastName(text));
  };
  const handleEmailChange = text => {
    dispatch(setEmail(text));
  };
  const handlePasswordChange = text => {
    dispatch(setPassword(text));
  };
  const submitRegister = async () => {
    registerNewUser();
  };

  const registerNewUser = async () => {
    return;
  };

  return (
    <View style={styles.container}>
      <View style={styles.registerTextView}>
        <Text style={styles.title}>Register Yourself</Text>
      </View>
      <View style={styles.inputView}>
        <CustomField
          placeholder={'First Name'}
          value={firstName}
          setValue={handleFirstNameChange}
        />
        <CustomField
          placeholder={'LastName'}
          value={lastName}
          setValue={handleLastNameChange}
        />
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
      <View style={styles.RegisterButtonView}>
        <RegisterButton onPress={submitRegister} />
      </View>
      <View style={styles.haveAnAccountView}>
        <GoToLoginButton />
      </View>
    </View>
  );
};

export default RegisterScreen;
