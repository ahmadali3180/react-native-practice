import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0.175 * height,
  },
  seeAccInfoView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  seeAccInfoText: {
    color: '#007aff',
    fontSize: 16,
    fontWeight: '500',
  },
});
