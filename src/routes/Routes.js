import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../screens/Login';
import UserDashboard from '../screens/UserDashboard';

import GithubUserInput from '../screens/GithubUserInput';
import GithubDetail from '../screens/GithubDetail';

const Stack = createStackNavigator();

function AppRouter() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="UserDashboard" component={UserDashboard} />

          <Stack.Screen name="GithubUserInput" component={GithubUserInput} />
          <Stack.Screen name="GithubDetail" component={GithubDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default AppRouter;