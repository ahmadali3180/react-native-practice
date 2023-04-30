import {Text, Platform, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

const HeaderLeft = () => {
  const navigation = useNavigation();
  const isLoggedIn = useSelector(state => state.rootReducer.auth.isLoggedIn);
  const goBack = () => {
    if (!isLoggedIn) {
      navigation.goBack();
    } else {
      navigation.navigate('WelcomeScreen');
    }
  };
  return (
    <TouchableOpacity style={styles.headerLeftView} onPress={goBack}>
      {Platform.OS === 'ios' ? (
        <FontAwesome name="angle-left" style={styles.headerLeftIcon} />
      ) : (
        <SimpleLineIcons name="arrow-left" style={styles.headerLeftIcon} />
      )}
      {Platform.OS === 'ios' ? (
        <Text style={styles.headerLeftText}>Back</Text>
      ) : null}
    </TouchableOpacity>
  );
};

export default HeaderLeft;
