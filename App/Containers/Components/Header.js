import React from 'react';
import {View,Text} from 'react-native'
import styles from './Styles/HeaderStyles'

export default  Header = (props)=>{
const {headerName} = props
    return (
        <View style={styles.container}>
        <Text style={styles.txt}>{headerName}</Text>
        </View>
    )
}