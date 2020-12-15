import ReduxPersist from '../Config/ReduxPersist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {persistStore} from 'redux-persist';

import DebugConfig from '../Config/DebugConfig';

const updateReducers = (store: Object) => {
  const reducerVersion = ReduxPersist.reducerVersion;

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion')
    .then((localVersion) => {
      if (localVersion !== reducerVersion) {
        if (DebugConfig.useReactotron) {
          console.tron.display({
            name: 'PURGE',
            value: {
              'Old Version:': localVersion,
              'New Version:': reducerVersion,
            },
            preview: 'Reducer Version Change Detected',
            important: true,
          });
        }
        // Purge store
    
        AsyncStorage.setItem('reducerVersion', reducerVersion);
      } else {
      
      }
    })
    .catch(() => {
    
      AsyncStorage.setItem('reducerVersion', reducerVersion);
    });
};

export default {updateReducers};
