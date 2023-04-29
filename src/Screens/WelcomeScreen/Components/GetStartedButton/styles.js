import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1.5,
    flexDirection: 'row',
    // backgroundColor: 'dodgerblue',
    // borderRadius: 15,
    width: width * 0.425,
    height: 52,
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'dodgerblue',
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    color: 'dodgerblue',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  button: {
    flex: 0.25,
  },
});
