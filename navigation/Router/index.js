import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Start from '../../screens/start';
import StartRegister from '../../screens/startRegister';
import Register from '../../screens/register';
import Login from '../../screens/login';
import Home from '../../screens/home';
import HealthBook from '../../screens/healthBook';
import PatientBook from '../../screens/patientBook';
import VaccineCome from '../../screens/vaccineCome';
import VaccineBook from '../../screens/vaccineBook';
import Setting from '../../screens/setting';
import ChooseLocation from '../../screens/location';
import EditProfile from '../../screens/editProfile';

const Stack = createNativeStackNavigator();

const Router = props => {
  return (
    <NavigationContainer initialRouteName="Home">
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
        <Stack.Screen
          name={'HealthBook'}
          component={HealthBook}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'PatientBook'}
          component={PatientBook}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'VaccineCome'}
          component={VaccineCome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'VaccineBook'}
          component={VaccineBook}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Setting'}
          component={Setting}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'ChooseLocation'}
          component={ChooseLocation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'EditProfile'}
          component={EditProfile}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
