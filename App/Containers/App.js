import React, {Component} from 'react';
import {Provider} from 'react-redux';
import RootContainer from './RootContainer';
import createStore from '../Redux';

// create our store
const store = createStore();
const App = () => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
};

export default App;
