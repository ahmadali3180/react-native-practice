import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';

const CustomField = ({
  value,
  setValue,
  placeholder,
  isSecureEntry,
  autoCapitalize,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={isSecureEntry}
        style={styles.input}
        placeholderTextColor={'lightgrey'}
        autoCapitalize={autoCapitalize}
        clearButtonMode="while-editing"
      />
    </View>
  );
};

export default CustomField;
