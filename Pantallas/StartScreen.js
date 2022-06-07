import * as React from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity, TextInput, Image, AppRegistry, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import logo from '../logo.png'
import { createSquare } from 'react-native/Libraries/StyleSheet/Rect';


const StartScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Screen 1</Text>
        <Text>Welcome to My App</Text>
        <Button
          title="Go to DashBoard"
          onPress={() => navigation.navigate('Dashboard')}
        ></Button>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'left',
    },
    login: {
      fontFamily:'Segoe UI',
      fontWeight:'bold',
      color:'white',
      fontSize: 24
    },
    top: {
      margin:10,
      fontFamily:'Segoe UI',
      fontWeight:'bold',
      color:'#C33C1C',
      fontSize: 30
    },
    name: {
      margin:10,
      fontFamily:'Segoe UI',
      fontWeight:'bold',
      color:'black',
      fontSize: 20
    },
    signUp: {
      fontFamily:'Segoe UI',
      color:'#15709D',
      fontSize: 17
    },
    image:{
      margin:50,
      height:193.1, /* x1.45  */
      width:280,
      borderRadius:0
    },
    button:{
      backgroundColor:'#15709D', 
      padding:10,
      width:280,
      borderRadius:15,
      margin:50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button2:{
      margin:10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      borderRadius:15,
      borderColor:'#E9E9E9',
      padding:10,
      width:280,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    square: {
      width: 250, 
      height: 200, 
      backgroundColor: '#EFE3DC',
      margin:10,
      borderRadius:10
      
    }
  
  });

  export default StartScreen;