import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#05375a',
    fontSize: 17,
    marginTop: 5,
    fontWeight: '600',
  },
  text: {
    color: 'dodgerblue',
    marginTop: 8,
    fontSize: 14,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  signInText: {
    color: 'white',
    fontweight: 'bold',
  },
});
