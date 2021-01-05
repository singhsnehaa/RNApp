import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Root } from 'native-base';
import {Provider} from 'react-redux';
import store from './src/store';

import AppRouter from './src/routes/Routes';


const App = () => {
  return (
    <Provider store={store}> 
      <Root>
        <AppRouter />
      </Root>
    </Provider>
  );
};


export default App;
