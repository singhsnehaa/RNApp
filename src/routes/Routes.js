import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../screens/Login';
import UserDashboard from '../screens/UserDashboard';


const Stack = createStackNavigator();

function AppRouter() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="UserDashboard" component={UserDashboard} />

        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default AppRouter;