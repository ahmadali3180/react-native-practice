import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1.5,
    backgroundColor: 'dodgerblue',
    borderRadius: 15,
    width: width * 0.425,
    height: 52,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    flex: 0.25,
  },
});
