import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');
const height_logo = height * 0.225;

export default StyleSheet.create({
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: height_logo / 2,
  },
});
