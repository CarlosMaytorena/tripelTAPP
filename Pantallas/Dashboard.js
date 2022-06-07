// In App.js in a new project
import * as React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getDashboard } from '../Services/UserServices';


import styles from './Styles';

const Stack = createNativeStackNavigator();

const Dashboard = ({route, navigation}) => {
    //API(route.params.paramKey).then(data => {
    //  console.log(data);
    
    //});
    console.log(route.params.info);
    var dashboardArray = route.params.info;
    let listOfActiveTourneys2 = extractInfo(dashboardArray[0]);
    console.log(listOfActiveTourneys2[0][1][0][1]);

    let listOfActiveTourneys = [
        [['tourneyName', 'ICEs'],['admin','Dimas'],['nextMatch','Marco-Ming']],
        [['tourneyName', 'Cetys'],['admin','Dimas'],['nextMatch','Saul-Marco']],
        [['tourneyName', 'Uni'],['admin','Ming'],['nextMatch','Pepe-Ming']],
        [['tourneyName', 'Cobach'],['admin','Saul'],['nextMatch','Saul-Dimas']],
    ];
    let listOfFinishedTourneys = [
      [['tourneyName', 'Cobach'],['admin','Dimas'],['nextMatch','Dimas-Ming']],
      [['tourneyName', 'Cetys'],['admin','Dimas'],['nextMatch','Saul-Marco']],
    ];

    //const activeTourneySquares = getSquares2(listOfActiveTourneys2, navigation);
    const activeTourneySquares = getSquares(listOfActiveTourneys, navigation);
    const finishedTourneySquares = getSquaresFinished(listOfFinishedTourneys, navigation);

    return (
      <View style={styles.container}>
        <View style={{ flexDirection:"row" }}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.navigate('Login')}
              color="#841584"
            >
              <Text style={styles.back}>{"<"}</Text>
            </TouchableOpacity>
            <Text style={styles.name}>Hello {route.params.paramKey}</Text>
            
        </View>
        <View style={{ flexDirection:"row" }}>
            
            <Text style={styles.top}>Your Tourneys</Text>
            <TouchableOpacity
              style={styles.noBgButton}
              onPress={() => navigation.navigate('NewTourney')}
              color="#841584"
            >
              <Text style={styles.newTourneyText}>+</Text>
            </TouchableOpacity>
        </View>
          <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
            {activeTourneySquares}      
          </ScrollView>
        <Text style={styles.top}>Finished Tourneys</Text>
          <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>    
            {finishedTourneySquares}
          </ScrollView>

      </View>
    );
  }

  function extractInfo(array){
    var tourneyList=[];
    let i=0;
    for (const element of array) {
      tourneyList[i]=[element[0][0],[element[2][0],element[2][1]],[element[3][0],element[3][1]]];
    }
    return tourneyList;
    
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
      list.push(<TouchableOpacity key={i.toString()} style={squareStyle} onPress={() => navigation.navigate('Tournament')}>
        <Text style={styles.tourneySquares}>{listOfTourneys[i][0][1]}</Text>
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

  function getSquares2(listOfTourneys,navigation){
    const list = [];
    for(let i=0; i<listOfTourneys.length; i++){
      const squareStyle = styles.square;
      if(i==0){
        squareStyle = styles.firstSquare;
      }
      else if(i+1==listOfTourneys.length){
        squareStyle = styles.lastSquare;
      }
      list.push(<TouchableOpacity key={i.toString()} style={squareStyle} onPress={() => navigation.navigate('Tournament')}>
        <Text style={styles.tourneySquares}>{listOfTourneys[i][0]}</Text>
        <View style={{ flexDirection:"row" }}>
          <View style={styles.container2}>
            <Image 
              source={require('../Logos/nemia.jpeg')}  
              style={{width: 80, height: 80, borderRadius: 400/ 2}} 
            />
            <Text style={styles.tourneySquares}>{listOfTourneys[i][1][0][0]}</Text>
          </View>
          <View style={styles.verticleLine}></View>
          <View style={styles.container2}>
            <Image 
              source={require('../Logos/lelepons.jpeg')}  
              style={{width: 80, height: 80, borderRadius: 400/ 2}} 
            />
            <Text style={styles.tourneySquares}>{listOfTourneys[i][2][0][0]}</Text>
          </View>
            
            
        </View>
      </TouchableOpacity>)
    }
    return list;
  }

  function getSquaresFinished(listOfTourneys,navigation){
    const list = [];
    for(let i=0; i<listOfTourneys.length; i++){
      const squareStyle = styles.square;
      if(i==0){
        squareStyle = styles.firstSquare;
      }
      else if(i+1==listOfTourneys.length){
        squareStyle = styles.lastSquare;
      }
      list.push(<TouchableOpacity key={i.toString()} style={squareStyle} onPress={() => navigation.navigate('Tournament')}>
        <Text style={styles.tourneySquares}>{listOfTourneys[i][0][1]}</Text>
        <View style={{ flexDirection:"row" }}>
          <View>
            <Image 
              source={require('../Logos/Dimas.jpg')}  
              style={{width: 130, height: 130, borderRadius: 400/ 2}} 
            />
          </View>
          <View>
            <Text style={styles.tourneySquaresFinished}>{listOfTourneys[i][2][1].substring(0,listOfTourneys[i][2][1].indexOf('-'))}</Text>
          </View>
            
            
        </View>
      </TouchableOpacity>)
    }
    return list;
  }



  export default Dashboard;