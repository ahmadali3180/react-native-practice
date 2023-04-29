import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  header: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'dodgerblue',
    height: 128,
    paddingTop: Platform.OS === 'ios' ? 32 : 0,
  },
  editIconView: {
    paddingTop: 12,
    paddingRight: 10,
  },
  editIcon: {
    fontSize: 22,
    color: 'black',
  },
  nameView: {
    paddingLeft: 10,
    paddingTop: 20,
  },
  nameText: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
  },
});
