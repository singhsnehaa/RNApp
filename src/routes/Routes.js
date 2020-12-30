import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../screens/Login';
import Lateral from '../screens/Lateral';

import GetOrders from '../screens/GetOrders';
import NewScreen from '../screens/NewScreen';
import History from '../screens/History';

import GithubUserInput from '../screens/GithubUserInput';
import GithubDetail from '../screens/GithubDetail';

const Stack = createStackNavigator();

function AppRouter() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        {/* <Stack.Navigator initialRouteName="NewScreen" screenOptions={{ headerShown: false }}> */}
          <Stack.Screen name="GetOrders" component={GetOrders} />
          <Stack.Screen name="NewScreen" component={NewScreen} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Lateral" component={Lateral} />

          <Stack.Screen name="GithubUserInput" component={GithubUserInput} />
          <Stack.Screen name="GithubDetail" component={GithubDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default AppRouter;