/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useEffect} from 'react';
import DeathCasesActions from './../../Redux/DeathCasesRedux'
import {connect} from 'react-redux'
import RBSheet from 'react-native-raw-bottom-sheet'
import {
View,FlatList,Text
} from 'react-native';
import styles from './styles'
import Header from '../Components/Header'
import FloatingActionButton from '../Components/FAB'
const HomeScreen = (props) => {
  const {deathData} = props
useEffect(() => {
props.getDeathData()
},[])

 
const _renderItem = ({index,item}) =>{
  return (
    <View style={styles.listItemContainer}>
    <Text style={styles.listItemTxtHeader}>{item.countryName}</Text>
    <View style={styles.listViewContent}>
    <View style={styles.listViewYellowBox}>
    <Text style={styles.listTextYellowBox} >Active</Text>
    <Text style={styles.listTxtYellow}>{item.activeTotal}</Text>

    </View>
    <View style={styles.listViewGreenBox}>
    <Text style={styles.listTxtGreenBox}>Recovered </Text>
    <Text style={styles.listTxtGreen}> {item.recoveredTotal}</Text>

    </View>
      <View style={styles.listViewRedBox}>
    <Text style={styles.listTxtRedBox}>Death </Text>
    <Text style={styles.listTxtRed}> {item.deathTotal}</Text>

    </View>
    </View>
    </View>
  
  )
}

  return (
  <View style={styles.mainContainer}>
  <Header headerName={'Covid-19 World Cases'}/>

  <FlatList
  data={deathData}
  keyExtractor={(item,index) =>{
    return index.toString()
  }}
  renderItem={_renderItem}
  />
  <FloatingActionButton onPress={()=>null} />
  </View>
  );
};


const mapStateToProps = (state)=>({
  deathData : state.deathCases.data
})
const mapDispatchToProps = (dispatch)=>({
  getDeathData:()=> dispatch(DeathCasesActions.deathCasesRequest())
})
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
