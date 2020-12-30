import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Root } from 'native-base';

import AppRouter from './src/routes/Routes';


const App = () => {
  return (
    <Root>
      <AppRouter />
      {/* comment  */}
    </Root>
  );
};


export default App;
