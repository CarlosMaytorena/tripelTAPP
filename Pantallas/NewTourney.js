// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import styles from './Styles';



const App = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.top}>Create Tourney</Text>
        <Text style={styles.newTourneyTitles}>Tourney Name</Text>
        <TextInput
          id="name"
          style={styles.input}
          placeholder="Tourney Name"
          //keyboardType="numeric"
        />
        <Text style={styles.newTourneyTitles}>Participants</Text>
        <TextInput
          id="email"
          style={styles.input}
          placeholder="Participants"
          //keyboardType="numeric"
        />
        <Text style={styles.newTourneyTitles}>Mode</Text>
        <TextInput
          id="email"
          style={styles.input}
          placeholder="Mode"
          //keyboardType="numeric"
        />
        <Text style={styles.newTourneyTitles}>Sets</Text>
        <TextInput
          id="password"
          style={styles.input}
          placeholder="Sets"
          //keyboardType="numeric"
        />
        <Text style={styles.newTourneyTitles}>Points Per Set</Text>
        <TextInput
          id="password"
          style={styles.input}
          placeholder="PPS"
          //keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
          color="#841584"
        >
        <Text style={styles.login}>Submit</Text>
        </TouchableOpacity>
  
        <StatusBar style="auto" />
        
      </View>
    );
  }

  export default App;