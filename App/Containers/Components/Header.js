import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './Styles/HeaderStyles';

export default Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{props.headerName}</Text>
    </View>
  );
};
