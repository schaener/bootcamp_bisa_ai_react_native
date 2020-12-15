import React, {Component, useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import ReduxNavigation from '../Navigation/ReduxNavigation';
import {connect} from 'react-redux';

import ReduxPersist from '../Config/ReduxPersist';

// Styles

function RootContainer(props) {


  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <ReduxNavigation />
    </View>
  );
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({

});

export default connect(null, mapDispatchToProps)(RootContainer);
