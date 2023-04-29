import {Text, Platform, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HeaderLeft = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity style={styles.headerLeftView} onPress={goBack}>
      {Platform.OS === 'ios' ? (
        <FontAwesome name="angle-left" style={styles.headerLeftIcon} />
      ) : (
        <Ionicons name="arrow-back" style={styles.headerLeftIcon} />
      )}
      {Platform.OS === 'ios' ? (
        <Text style={styles.headerLeftText}>Back</Text>
      ) : null}
    </TouchableOpacity>
  );
};

export default HeaderLeft;
