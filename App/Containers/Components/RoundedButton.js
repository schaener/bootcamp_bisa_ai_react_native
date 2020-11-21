import React, {useEffect} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Styles/FABStyles';

export default RoundedButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.buttonStyles}>
      <Text style={props.txtStyles}>{props.text}</Text>
    </TouchableOpacity>
  );
};
