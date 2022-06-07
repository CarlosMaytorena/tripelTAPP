import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    login: {
      //fontFamily:'Segoe UI',
      fontWeight:'bold',
      color:'white',
      fontSize: 24
    },
    back: {
      //fontFamily:'Segoe UI',
      fontWeight:'900',
      color:'#15709D',
      fontSize: 30
    },
    points: {
      //fontFamily:'Segoe UI',
      fontWeight:'900',
      color:'white',
      fontSize: 20
    },
    top: {
      margin:10,
      //fontFamily:'Segoe UI',
      fontWeight:'bold',
      color:'#C33C1C',
      fontSize: 30
    },
    name: {
      margin:10,
      //fontFamily:'Segoe UI',
      fontWeight:'bold',
      color:'black',
      marginTop: 57,
      fontSize: 25
    },
    tourneySquares: {
      margin:10,
      //fontFamily:'Segoe UI',
      color:'#C33C1C',
      fontSize: 25,
      alignContent:'center',
      justifyContent:'center'
    },
    tourneySquaresFinished: {
      margin:10,
      marginTop:50,
      //fontFamily:'Segoe UI',
      color:'#C33C1C',
      fontSize: 25,
      alignContent:'center',
      justifyContent:'center'
    },
    pointsText: {
      marginLeft:15,
      marginRight:15,
      //fontFamily:'Segoe UI',
      color:'#C33C1C',
      fontSize: 25,
      alignContent:'center',
      justifyContent:'center'
    },
    newTourneyTitles: {
      marginTop:5,
      //fontFamily:'Segoe UI',
      color:'black',
      fontSize: 15
    },
    signUp: {
      //fontFamily:'Segoe UI',
      color:'#15709D',
      fontSize: 17
    },
    newTourneyText: {
      //fontFamily:'Segoe UI',
      color:'#15709D',
      fontWeight: 'bold',
      fontSize: 30
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
    pointsButton:{
      backgroundColor:'#15709D', 
      padding:3,
      width:35,
      borderRadius:6,
      margin:0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    noBgButton:{
      margin:10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    backButton:{
      padding:2,
      width:40,
      borderRadius:15,
      alignContent:'center',
      marginTop:50,
      alignItems: 'center',
    },
    newTourney:{
      backgroundColor:'#15709D', 
      padding:10,
      width:75,
      borderRadius:15,
      alignContent:'center',
      margin:10,
      alignItems: 'center',
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
      width: 300, 
      height: 200, 
      backgroundColor: '#EFE3DC',
      margin:10,
      borderRadius:10,
      alignItems:'center'
    },
    firstSquare: {
      width: 300, 
      height: 200, 
      backgroundColor: '#EFE3DC',
      margin:10,
      marginLeft:(Dimensions.get('window').width-300)/2,
      borderRadius:10,
      alignItems:'center'
      
    },
    lastSquare: {
      width: 300, 
      height: 200, 
      backgroundColor: '#EFE3DC',
      margin:10,
      marginRight:(Dimensions.get('window').width-300)/2,
      borderRadius:10,
      alignItems:'center'
      
    },
    triangleLeft: {
      transform: [{ rotate: "-90deg" }],
    },
    verticleLine: {
      height: '100%',
      width: 1,
      backgroundColor: '#C33C1C',
    }
  
  });

  export default styles;