import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Start from '../../screens/start';
import StartRegister from '../../screens/startRegister';
import Register from '../../screens/register';
import Login from '../../screens/login';
import Home from '../../screens/home';

const Stack = createNativeStackNavigator();

const Router = props => {
  return (
    <NavigationContainer initialRouteName="Start">
      <Stack.Navigator>
        <Stack.Screen
          name={'Start'}
          component={Start}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'StartRegister'}
          component={StartRegister}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Register'}
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Login'}
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Home'}
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
