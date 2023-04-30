import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    // backgroundColor: '#2C3E50',
  },
  loginTextView: {
    marginBottom: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: 'black',
  },
  loginButtonView: {
    width: '50%',
    height: 52,
    marginVertical: 16,
  },
  inputView: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 16,
  },
  createAccountView: {
    height: 52,
    marginVertical: 14,
    alignSelf: 'center',
  },
});
