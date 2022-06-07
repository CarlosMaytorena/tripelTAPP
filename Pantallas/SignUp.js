// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './Styles';

const SignUp = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.top}>Sign Up</Text>     
        <TextInput
          id="name"
          style={styles.input}
          placeholder="Name"
          //keyboardType="numeric"
        />
        <TextInput
          id="username"
          style={styles.input}
          placeholder="Username"
          //keyboardType="numeric"
        />
        <TextInput
          id="email"
          style={styles.input}
          placeholder="E-Mail"
          //keyboardType="numeric"
        />
        <TextInput
          id="password"
          style={styles.input}
          placeholder="Password"
          keyboardType='default'
          //keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Dashboard')}
          color="#841584"
        >
        <Text style={styles.login}>Create Account</Text>
        </TouchableOpacity>
  
        <StatusBar style="auto" />
        
      </View>
    );
  }


  export default SignUp;