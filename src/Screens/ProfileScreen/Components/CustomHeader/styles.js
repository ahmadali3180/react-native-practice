import {StyleSheet, Platform, Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');

export default StyleSheet.create({
  header: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'dodgerblue',
    height: 0.1 * height,
    paddingTop: 0,
  },
  editIconView: {
    paddingTop: Platform.OS === 'ios' ? 43 : 10,
    paddingRight: 10,
  },
  editIcon: {
    fontSize: 22,
    color: 'black',
  },
  nameView: {
    paddingLeft: 10,
    paddingTop: Platform.OS === 'ios' ? 44 : 10,
  },
  nameText: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
  },
});
