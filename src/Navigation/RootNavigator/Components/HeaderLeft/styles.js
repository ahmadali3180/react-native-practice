import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  headerLeftView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLeftIcon: {
    color: Platform.OS === 'ios' ? '#007AFF' : '#000',
    fontSize: Platform.OS === 'ios' ? 24 : 28,
    marginHorizontal: 3,
    alignSelf: 'center',
  },
  headerLeftText: {
    fontSize: 20,
    color: '#007AFF',
    marginHorizontal: 5,
  },
});
