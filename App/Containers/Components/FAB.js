import React, {useEffect} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Styles/FABStyles';

export default Header = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text style={styles.txt}>+</Text>
    </TouchableOpacity>
  );
};
