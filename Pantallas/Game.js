// In App.js in a new project
import {useState} from 'react';
import * as React from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity, TextInput, Image, AppRegistry, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import logo from '../logo.png'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from './Styles';


const Stack = createNativeStackNavigator();
let count = [0];
let count2= [0];

const Game = ({navigation}) => {

  const [value, setValue] = useState(0);
  const incrementValue = () => setValue(value + 1);
  const decreaseValue = () => setValue(value - 1);

  const [value2, setValue2] = useState(0);
  const incrementValue2 = () => setValue2(value2 + 1);
  const decreaseValue2 = () => setValue2(value2 - 1);
  
  const [setNumber, setValue3] = useState(1);
  const incrementValue3 = () => {
    setValue(0);
    setValue2(0);
    setValue3(setNumber + 1);
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection:"row" }}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.navigate('Tournament')}
              color="#841584"
            >
              <Text style={styles.back}>{"<"}</Text>
            </TouchableOpacity>
            <Text style={styles.name}>Game 3</Text>
            
        </View>
        <Text style={styles.top}>Set {setNumber}</Text>
        <View style={{ flexDirection:"row" }}>
          <View style={styles.container2}>
            <Image 
              source={require('../Logos/MarcoLeal.jpg')}  
              style={{width: 150, height: 150, borderRadius: 400/ 2}} 
            />
            <Text style={styles.tourneySquares}>Marco</Text>
            <View style={{ flexDirection:"row" }}>
              <TouchableOpacity
                style={styles.pointsButton}
                onPress={decreaseValue}
                color="#841584"
              >
                <Text style={styles.points}>-</Text>
              </TouchableOpacity>
              <Text style={styles.pointsText}>{value}</Text>
              <TouchableOpacity
                style={styles.pointsButton}
                onPress={incrementValue}
                color="#841584"
              >
                <Text style={styles.points}>+</Text>
              </TouchableOpacity>
            </View>

          </View>
          <View style={styles.verticleLine}></View>
          <View style={styles.container2}>
            <Image 
              source={require('../Logos/Ming.jpeg')}  
              style={{width: 150, height: 150, borderRadius: 400/ 2}} 
            />
            <Text style={styles.tourneySquares}>Ming</Text>
            <View style={{ flexDirection:"row" }}>
              <TouchableOpacity
                style={styles.pointsButton}
                onPress={decreaseValue2}
                color="#841584"
              >
                <Text style={styles.points}>-</Text>
              </TouchableOpacity>
              <Text style={styles.pointsText}>{value2}</Text>
              <TouchableOpacity
                style={styles.pointsButton}
                onPress={incrementValue2}
                color="#841584"
              >
                <Text style={styles.points}>+</Text>
              </TouchableOpacity>
            </View>
          </View>            
            
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={incrementValue3}
          color="#841584"
        >
        <Text style={styles.login}>Finish Set</Text>
        </TouchableOpacity>     
    </View>
  );
}




export default Game