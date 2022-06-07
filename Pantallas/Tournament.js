// In App.js in a new project
import * as React from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity, TextInput, Image, AppRegistry, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from './Styles';

const Stack = createNativeStackNavigator();

const Tournament = ({navigation}) => {
    //const nombre = route.params.name;
    
    let listOfActiveTourneys = [
      [['tourneyName', 'ICEs'],['admin','Dimas'],['nextMatch','Dimas-Ming']],
      [['tourneyName', 'Cetys'],['admin','Dimas'],['nextMatch','Saul-Marco']],
      [['tourneyName', 'Uni'],['admin','Ming'],['nextMatch','Pepe-Ming']],
      [['tourneyName', 'Cobach'],['admin','Saul'],['nextMatch','Saul-Dimas']],
    ];
    let listOfFinishedTourneys = [
      [['tourneyName', 'ICEs'],['admin','Dimas'],['nextMatch','Dimas-Ming']],
      [['tourneyName', 'Cetys'],['admin','Dimas'],['nextMatch','Saul-Marco']],
    ];

    const activeTourneySquares = getSquares(listOfActiveTourneys, navigation);
    const finishedTourneySquares = getSquaresResults(listOfFinishedTourneys, navigation);

    return (
      <View style={styles.container}>

        <View style={{ flexDirection:"row" }}>
            <View>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
              color="#841584"
            >
              <Text style={styles.back}>{"<"}</Text>
            </TouchableOpacity>
            </View>
            <View>
            <Text style={styles.name}>Tourney Name</Text>
            </View>
        </View>

        <Text style={styles.top}>Upcoming Matches</Text>

          <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
            {activeTourneySquares}      
          </ScrollView>
        <Text style={styles.top}>Results</Text>
          <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>    
            {finishedTourneySquares}
          </ScrollView>

      </View>
    );
  }

  function getSquares(listOfTourneys,navigation){
    const list = [];
    for(let i=0; i<listOfTourneys.length; i++){
      const squareStyle = styles.square;
      if(i==0){
        squareStyle = styles.firstSquare;
      }
      else if(i+1==listOfTourneys.length){
        squareStyle = styles.lastSquare;
      }
      list.push(<TouchableOpacity key={i.toString()} style={squareStyle} onPress={() => navigation.navigate('Game')}>
        <Text style={styles.tourneySquares}>Game {i + 3}</Text>
        <View style={{ flexDirection:"row" }}>
          <View style={styles.container2}>
            <Image 
              source={require('../Logos/MarcoLeal.jpg')}  
              style={{width: 80, height: 80, borderRadius: 400/ 2}} 
            />
            <Text style={styles.tourneySquares}>{listOfTourneys[i][2][1].substring(0,listOfTourneys[i][2][1].indexOf('-'))}</Text>
          </View>
          <View style={styles.verticleLine}></View>
          <View style={styles.container2}>
            <Image 
              source={require('../Logos/Ming.jpeg')}  
              style={{width: 80, height: 80, borderRadius: 400/ 2}} 
            />
            <Text style={styles.tourneySquares}>{listOfTourneys[i][2][1].substring(listOfTourneys[i][2][1].indexOf('-')+1)}</Text>
          </View>
            
            
        </View>
      </TouchableOpacity>)
    }
    return list;
  }

  function getSquaresResults(listOfTourneys,navigation){
    const list = [];
    for(let i=0; i<listOfTourneys.length; i++){
      const squareStyle = styles.square;
      if(i==0){
        squareStyle = styles.firstSquare;
      }
      else if(i+1==listOfTourneys.length){
        squareStyle = styles.lastSquare;
      }
      list.push(<TouchableOpacity key={i.toString()} style={squareStyle} onPress={() => navigation.navigate('Game')}>
        <Text style={styles.tourneySquares}>Game {i + 1}</Text>
        <View style={{ flexDirection:"row" }}>
          <View style={styles.container2}>
            <Image 
              source={require('../Logos/MarcoLeal.jpg')}  
              style={{width: 80, height: 80, borderRadius: 400/ 2}} 
            />
            <Text style={styles.tourneySquares}>{listOfTourneys[i][2][1].substring(0,listOfTourneys[i][2][1].indexOf('-'))}</Text>
          </View>
          <View style={styles.verticleLine}></View>
          <View style={styles.container2}>
            <Image 
              source={require('../Logos/Ming.jpeg')}  
              style={{width: 80, height: 80, borderRadius: 400/ 2}} 
            />
            <Text style={styles.tourneySquares}>{listOfTourneys[i][2][1].substring(listOfTourneys[i][2][1].indexOf('-')+1)}</Text>
          </View>
            
            
        </View>
      </TouchableOpacity>)
    }
    return list;
  }

  export default Tournament;