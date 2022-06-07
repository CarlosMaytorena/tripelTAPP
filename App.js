// In App.js in a new project

import { View, Text, Button,ScrollView } from 'react-native';

import styles from './Pantallas/Styles';


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Pantallas/Login';
import SignUp from './Pantallas/SignUp'
import Dashboard from './Pantallas/Dashboard'
import StartScreen from './Pantallas/StartScreen';
import NewTourney from './Pantallas/NewTourney';
import Tournament from './Pantallas/Tournament';
import Game from './Pantallas/Game';


import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={Login} options={{title: "Welcome"}} />
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Dashboard" component={Dashboard}/>
          <Stack.Screen name="NewTourney" component={NewTourney}/>
          <Stack.Screen name="Tournament" component={Tournament}/>
          <Stack.Screen name="Game" component={Game}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}

export default App;