// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity, TextInput, Image, AppRegistry, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import logo from './logo.png'
import { createSquare } from 'react-native/Libraries/StyleSheet/Rect';


const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />      
      <TextInput
        id="username"
        style={styles.input}
        placeholder="Username"
        //keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        //keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => validation("Carlos","oli", navigation)}
        color="#841584"
      >
      <Text style={styles.login}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button2}
        onPress={() => navigation.navigate('SignUp')}
        color="#841584"
      >
        <Text style={styles.signUp}>or Sign Up</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
      
    </View>
  );
}

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
        secureTextEntry={secure}
        //keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => validation("Carlos","oli", navigation)}
        color="#841584"
      >
      <Text style={styles.login}>Create Account</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
      
    </View>
  );
}


const DashboardScreen = ({navigation, route}) => {
  const nombre = route.params.name;
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Hello {nombre}</Text>

      <Text style={styles.top}>Your Tourneys</Text>
      <View style={styles.container2}>
            <ScrollView  horizontal={true}>    
                <View style={styles.square}>  

                </View>
                <View style={styles.square}>  

                </View>
                <View style={styles.square}>  

                </View>
                <View style={styles.square}>  

                </View>       
            </ScrollView>
      </View>  
      <Text style={styles.top}>Finished Tourneys</Text>
      <View style={styles.container2}>
            <ScrollView  horizontal={true}>    
                <View style={styles.square}>  

                </View>
                <View style={styles.square}>  

                </View>
                <View style={styles.square}>  

                </View>
                <View style={styles.square}>  

                </View>       
            </ScrollView>
      </View>
      <Button
        title="Hola"
        onPress={() => navigation.navigate('Login')}
      ></Button>
    </View>
  );
}

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


const Stack = createNativeStackNavigator();

function validation(username, password, navigation) {


  if(username=="Carlos" && password=="oli"){
    navigation.navigate('Dashboard', {name: "Carlos"})
  }
  
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Login"} screenOptions={{headerShown:false}}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen 
          name="Dashboard"
          component={DashboardScreen}
          options={{
            
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;