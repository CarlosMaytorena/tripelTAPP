// In App.js in a new project

import * as React from 'react';
import {useState} from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity, TextInput, Image, AppRegistry, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import logo from '../logo.png'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createUser, getDashboard } from '../Services/UserServices';
import styles from './Styles';


const Stack = createNativeStackNavigator();

const Login = ({navigation}) => {
  const [username, setTextUsername] = useState('')
  const [psk, setTextPsk] = useState('')
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />      
      <TextInput
        id="username"
        style={styles.input}
        placeholder="Username"
        onChangeText={newText => setTextUsername(newText)}
        defaultValue={username}
        //keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={newText => setTextPsk(newText)}
        defaultValue={psk}
        //keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.button}
        //onPress={() => navigation.navigate('Dashboard')}
        onPress={() => API(username.toString(),psk.toString(),navigation)}
        color="#841584"
      >
      <Text style={styles.login}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.noBgButton}
        onPress={() => navigation.navigate('SignUp')}
        color="#841584"
      >
        <Text style={styles.signUp}>or Sign Up</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
      
    </View>
  );
}

function API(username,psk,navigation){
  createUser({"name":username,"psk":psk}).then(data => {
    if(data.permission){

      API2(username,navigation);


    }
    else{
      Alert.alert(
        "Try Again",
        "Username or password incorrect",
        [
           { text: "OK",
              onPress: () => console.log("OK Pressed")
           }
        ],
        { cancelable: false }
     );
    }


  }).catch(error => console.log(error));
}


function API2(username,navigation){
  getDashboard({"name":username}).then(data => {
    
    navigation.navigate('Dashboard', {paramKey: username, info: data});

  }).catch(error => console.log(error))


}

export default Login

